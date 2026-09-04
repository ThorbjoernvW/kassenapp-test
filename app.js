const APP_VERSION = "V0.22.2";


const STORAGE_KEY = "kassenapp_v0_1_state";

const defaultState = {
  appName: "KassenApp",
  products: [
    { id: crypto.randomUUID(), name: "Essen 1", category: "food", price: 6.00, icon: "🍽️", active: true, order: 1, color: "#f2c66d" },
    { id: crypto.randomUUID(), name: "Essen 2", category: "food", price: 5.50, icon: "🥘", active: true, order: 2, color: "#e8a98d" },
    { id: crypto.randomUUID(), name: "Essen 3", category: "food", price: 4.50, icon: "🍴", active: true, order: 3, color: "#e6bd86" },
    { id: crypto.randomUUID(), name: "Getränk 1", category: "drink", price: 2.50, icon: "🥤", active: true, order: 4, color: "#9fc8d8" },
    { id: crypto.randomUUID(), name: "Getränk 2", category: "drink", price: 2.00, icon: "🧃", active: true, order: 5, color: "#9fcbb3" },
    { id: crypto.randomUUID(), name: "Getränk 3", category: "drink", price: 3.00, icon: "☕", active: true, order: 6, color: "#b7c6e6" }
  ],
  sales: [],
  paymentMode: "quick",
  hapticsEnabled: true
};

let state = loadState();
let cart = new Map();
let salesPage = 1;
let salesPageSize = 10;
let keypadSequence = "";


function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultState);
    const parsed = JSON.parse(raw);
    if (!parsed.products || !parsed.sales) throw new Error("invalid");
    const defaultColors = ["#f2c66d", "#e8a98d", "#e6bd86", "#9fc8d8", "#9fcbb3", "#b7c6e6"];
    parsed.products = parsed.products.map((p, i) => ({
      ...p,
      imageData: p.imageData || "",
      color: p.color || defaultColors[i % defaultColors.length]
    }));
    parsed.paymentMode = parsed.paymentMode === "keypad" ? "keypad" : "quick";
    parsed.hapticsEnabled = parsed.hapticsEnabled !== false;
    return parsed;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}


function haptic(pattern = 18) {
  if (!state.hapticsEnabled) return;
  if (typeof navigator.vibrate === "function") {
    try { navigator.vibrate(pattern); } catch {}
  }
}

function money(value) {
  return Number(value || 0).toLocaleString("de-DE", { style: "currency", currency: "EUR" });
}

function parseMoney(value) {
  if (typeof value !== "string") return Number(value || 0);
  return Number(value.replace(/\./g, "").replace(",", ".").replace(/[^\d.-]/g, "")) || 0;
}

function getProduct(id) {
  return state.products.find(p => p.id === id);
}

function sortedProducts() {
  return [...state.products].sort((a,b) => a.order - b.order);
}

function normalizeOrder() {
  const ordered = sortedProducts();
  ordered.forEach((product, index) => {
    product.order = index + 1;
  });
  state.products = ordered;
}

function cartTotal() {
  let total = 0;
  for (const [id, qty] of cart.entries()) {
    const p = getProduct(id);
    if (p) total += p.price * qty;
  }
  return total;
}

function renderAppName() {
  document.getElementById("appTitle").textContent = state.appName || "KassenApp";
  const mobileTitle = document.getElementById("mobileAppTitle");
  if (mobileTitle) mobileTitle.textContent = state.appName || "KassenApp";
  document.getElementById("appNameInput").value = state.appName || "KassenApp";
}

function renderProducts() {
  const foodGrid = document.getElementById("foodGrid");
  const drinkGrid = document.getElementById("drinkGrid");
  foodGrid.innerHTML = "";
  drinkGrid.innerHTML = "";

  const active = sortedProducts().filter(p => p.active);
  const food = active.filter(p => p.category === "food");
  const drinks = active.filter(p => p.category === "drink");

  for (const p of food) foodGrid.appendChild(productButton(p));
  for (const p of drinks) drinkGrid.appendChild(productButton(p));

  if (!food.length) foodGrid.innerHTML = '<div class="muted">Keine aktiven Essensartikel.</div>';
  if (!drinks.length) drinkGrid.innerHTML = '<div class="muted">Keine aktiven Getränke.</div>';
}

function productButton(product) {
  const btn = document.createElement("button");
  btn.type = "button";
  const hasImage = Boolean(product.imageData);
  const hasIcon = Boolean(product.icon && product.icon.trim());
  btn.className = `product-btn ${product.category} ${hasImage ? "has-image" : ""} ${(!hasImage && hasIcon) ? "has-icon" : ""} ${(!hasImage && !hasIcon) ? "no-media" : ""}`;
  btn.style.setProperty("--product-color", product.color || (product.category === "food" ? "#f2c66d" : "#9fc8d8"));

  let media = "";
  if (hasImage) {
    media = `<div class="product-media image"><img src="${product.imageData}" alt="" /></div>`;
  } else if (hasIcon) {
    media = `<div class="product-media icon">${escapeHtml(product.icon)}</div>`;
  }

  btn.innerHTML = `
    ${media}
    <div class="product-copy">
      <div class="product-name">${escapeHtml(product.name)}</div>
      <div class="product-price">${money(product.price)}</div>
    </div>`;
  btn.addEventListener("click", () => addToCart(product.id));
  return btn;
}

function addToCart(id) {
  cart.set(id, (cart.get(id) || 0) + 1);
  haptic(14);
  renderCart();
}

function changeQty(id, delta) {
  const next = (cart.get(id) || 0) + delta;
  if (next <= 0) cart.delete(id);
  else cart.set(id, next);
  haptic(12);
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cartList");
  const hint = document.getElementById("cartHint");
  list.innerHTML = "";

  if (!cart.size) {
    hint.textContent = "Noch keine Artikel ausgewählt.";
    list.innerHTML = `<div class="cart-empty">Tippe links auf einen Artikel, um ihn hinzuzufügen.</div>`;
  } else {
    hint.textContent = `${[...cart.values()].reduce((a,b)=>a+b,0)} Artikel im aktuellen Verkauf`;
  }

  for (const [id, qty] of cart.entries()) {
    const p = getProduct(id);
    if (!p) continue;
    const row = document.createElement("div");
    row.className = "cart-row";
    row.innerHTML = `
      <div class="cart-main">
        <div class="cart-name">${escapeHtml(p.name)}</div>
        <div class="cart-unit">${money(p.price)} pro Stück</div>
      </div>
      <div class="qty-controls">
        <button type="button" data-minus aria-label="Menge verringern">−</button>
        <strong>${qty}</strong>
        <button type="button" data-plus aria-label="Menge erhöhen">+</button>
      </div>
      <strong class="cart-line-total">${money(qty * p.price)}</strong>
      <button type="button" class="delete-cart-item" data-delete aria-label="${escapeHtml(p.name)} löschen">×</button>`;
    row.querySelector("[data-minus]").addEventListener("click", () => changeQty(id, -1));
    row.querySelector("[data-plus]").addEventListener("click", () => changeQty(id, 1));
    row.querySelector("[data-delete]").addEventListener("click", () => {
      cart.delete(id);
      haptic(16);
      renderCart();
    });
    list.appendChild(row);
  }

  document.getElementById("grandTotal").textContent = money(cartTotal());
  updateChange();
}


function amountToKeypadSequence(value) {
  const cents = Math.max(0, Math.round(Number(value || 0) * 100));
  return cents ? String(cents) : "";
}

function keypadSequenceValue() {
  if (!keypadSequence) return 0;
  if (keypadSequence.includes(",")) {
    const [eurosRaw, centsRaw = ""] = keypadSequence.split(",");
    const euros = Number(eurosRaw || "0") || 0;
    const cents = Number((centsRaw + "00").slice(0, 2)) || 0;
    return euros + cents / 100;
  }
  return (Number(keypadSequence) || 0) / 100;
}

function syncKeypadInput() {
  const input = document.getElementById("givenInput");
  const value = keypadSequenceValue();
  input.value = value ? value.toFixed(2).replace(".", ",") : "";
  updateChange();
}

function handleKeypadPress(key) {
  if (key === ",") {
    if (!keypadSequence.includes(",")) {
      keypadSequence = (keypadSequence || "0") + ",";
    }
  } else if (key === "00") {
    if (keypadSequence.includes(",")) {
      const [euros, cents = ""] = keypadSequence.split(",");
      if (cents.length < 2) keypadSequence = euros + "," + (cents + "00").slice(0, 2);
    } else if (keypadSequence.length < 9) {
      keypadSequence = (keypadSequence + "00").slice(0, 9);
    }
  } else if (/^\d$/.test(key)) {
    if (keypadSequence.includes(",")) {
      const [euros, cents = ""] = keypadSequence.split(",");
      if (cents.length < 2) keypadSequence = euros + "," + cents + key;
    } else if (keypadSequence.length < 9) {
      keypadSequence = (keypadSequence + key).replace(/^0+(?=\d)/, "").slice(0, 9);
    }
  }
  syncKeypadInput();
}

function setPaymentMode(mode, persist = true) {
  const nextMode = mode === "keypad" ? "keypad" : "quick";
  state.paymentMode = nextMode;
  document.querySelectorAll("[data-payment-mode]").forEach(btn => {
    const active = btn.dataset.paymentMode === nextMode;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  document.getElementById("quickPaymentMode").hidden = nextMode !== "quick";
  document.getElementById("keypadPaymentMode").hidden = nextMode !== "keypad";

  const input = document.getElementById("givenInput");
  input.readOnly = nextMode === "keypad";
  input.inputMode = nextMode === "keypad" ? "none" : "decimal";
  if (nextMode === "keypad") {
    keypadSequence = amountToKeypadSequence(parseMoney(input.value));
    syncKeypadInput();
  }
  if (persist) saveState();
}

function updateChange() {
  const total = cartTotal();
  const given = parseMoney(document.getElementById("givenInput").value);
  const change = Math.max(0, given - total);
  document.getElementById("changeAmount").textContent = money(change);
}

function clearCart(showMessage = false) {
  cart.clear();
  document.getElementById("givenInput").value = "";
  keypadSequence = "";
  renderCart();
  if (showMessage) setCashMessage("Aktueller Verkauf wurde geleert.");
}

function setCashMessage(msg, isError = false) {
  const el = document.getElementById("cashMessage");
  el.textContent = msg;
  el.style.color = isError ? "var(--danger)" : "var(--green-700)";
  window.clearTimeout(setCashMessage._t);
  setCashMessage._t = window.setTimeout(() => { el.textContent = ""; }, 3500);
}

function completeSale() {
  if (!cart.size) {
    setCashMessage("Bitte zuerst mindestens einen Artikel auswählen.", true);
    return;
  }

  const total = cartTotal();
  const rawGiven = document.getElementById("givenInput").value.trim();
  const given = rawGiven === "" ? total : parseMoney(rawGiven);

  if (given < total) {
    setCashMessage("Der gegebene Betrag ist kleiner als der Gesamtpreis.", true);
    return;
  }

  const items = [...cart.entries()].map(([productId, qty]) => {
    const p = getProduct(productId);
    return {
      productId,
      name: p?.name || "Unbekannt",
      qty,
      unitPrice: p?.price || 0
    };
  });

  const sale = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    items,
    total,
    given,
    change: given - total,
    status: "completed"
  };

  state.sales.push(sale);
  saveState();
  haptic([30, 45, 55]);
  clearCart();
  setCashMessage(`Verkauf über ${money(total)} gespeichert.`);
  renderSales();
}

function switchView(name) {
  if (typeof closeSaleDetail === "function") closeSaleDetail();
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById(name + "View").classList.add("active");
  document.querySelector(`.nav-btn[data-view="${name}"]`).classList.add("active");

  if (name === "sales") renderSales();
  if (name === "settings") renderSettings();
}

function saleDateParts(sale) {
  const d = new Date(sale.createdAt);
  return {
    date: d.toLocaleDateString("de-DE"),
    time: d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
    isoDate: d.toISOString().slice(0, 10)
  };
}

function filteredSales() {
  const status = document.getElementById("statusFilter")?.value || "all";
  return [...state.sales].reverse().filter(s => {
    if (status !== "all" && s.status !== status) return false;
    return true;
  });
}

function currentExportProducts() {
  const ids = new Set();
  for (const sale of state.sales) for (const item of sale.items) ids.add(item.productId);
  for (const p of state.products) ids.add(p.id);
  const list = [];
  for (const id of ids) {
    const p = state.products.find(x => x.id === id);
    const fromSale = state.sales.flatMap(s => s.items).find(i => i.productId === id);
    list.push({ id, name: p?.name || fromSale?.name || "Artikel" });
  }
  return list;
}

function renderSales() {
  const sales = filteredSales();
  const head = document.getElementById("salesHead");
  const body = document.getElementById("salesBody");
  const empty = document.getElementById("salesEmpty");

  const latestSale = state.sales[state.sales.length - 1];
  const day = latestSale ? saleDateParts(latestSale).date : new Date().toLocaleDateString("de-DE");
  document.getElementById("salesDayLabel").textContent = day;

  head.innerHTML = `
    <tr>
      <th>Uhrzeit</th>
      <th>Artikel</th>
      <th>Betrag</th>
      <th>Status</th>
      <th class="chevron-col"></th>
    </tr>`;

  const totalPages = Math.max(1, Math.ceil(sales.length / salesPageSize));
  if (salesPage > totalPages) salesPage = totalPages;
  if (salesPage < 1) salesPage = 1;

  const startIndex = (salesPage - 1) * salesPageSize;
  const pageSales = sales.slice(startIndex, startIndex + salesPageSize);

  body.innerHTML = "";

  for (const sale of pageSales) {
    const parts = saleDateParts(sale);
    const articleText = sale.items.map(i => `${i.qty}× ${escapeHtml(i.name)}`).join(", ");
    const tr = document.createElement("tr");
    tr.className = `clickable-sale-row ${sale.status === "cancelled" ? "is-cancelled" : ""}`;
    tr.innerHTML = `
      <td class="sale-time">${parts.time}</td>
      <td class="sale-items-cell">${articleText}</td>
      <td class="sale-amount">${money(sale.total)}</td>
      <td>
        <span class="status-pill ${sale.status === "cancelled" ? "cancelled" : "completed"}">
          ${sale.status === "cancelled" ? "Storniert" : "Abgeschlossen"}
        </span>
      </td>
      <td class="sale-chevron">›</td>`;
    tr.addEventListener("click", () => showSaleDetail(sale.id));
    body.appendChild(tr);
  }

  empty.style.display = sales.length ? "none" : "block";

  const from = sales.length ? startIndex + 1 : 0;
  const to = Math.min(startIndex + salesPageSize, sales.length);
  document.getElementById("paginationInfo").textContent = `${from}–${to} von ${sales.length}`;
  document.getElementById("pageIndicator").textContent = `Seite ${salesPage} / ${totalPages}`;
  document.getElementById("prevPageBtn").disabled = salesPage <= 1;
  document.getElementById("nextPageBtn").disabled = salesPage >= totalPages;

  const completed = state.sales.filter(s => s.status === "completed");
  const revenue = completed.reduce((sum, s) => sum + s.total, 0);
  document.getElementById("statSalesCount").textContent = completed.length;
  document.getElementById("statRevenue").textContent = money(revenue);
  document.getElementById("statAverage").textContent = money(completed.length ? revenue / completed.length : 0);

  const itemTotals = new Map();
  for (const sale of completed) {
    for (const item of sale.items) {
      const current = itemTotals.get(item.productId) || { productId: item.productId, name: item.name, qty: 0 };
      current.qty += item.qty;
      current.name = item.name;
      itemTotals.set(item.productId, current);
    }
  }

  const stats = document.getElementById("itemStats");
  const sorted = [...itemTotals.values()].sort((a, b) => b.qty - a.qty);
  const maxQty = sorted[0]?.qty || 1;

  stats.innerHTML = sorted.length
    ? sorted.map(item => {
        const product = state.products.find(p => p.id === item.productId);
        const image = product?.imageData
          ? `<img src="${product.imageData}" alt="" />`
          : `<span>${escapeHtml(product?.icon || item.name.slice(0, 1).toUpperCase())}</span>`;
        const color = product?.color || "#d8eadf";
        return `
          <article class="top-product-card" style="--item-color:${color}">
            <div class="top-product-media">${image}</div>
            <div class="top-product-copy">
              <strong>${escapeHtml(item.name)}</strong>
              <span><b>${item.qty}</b> verkauft</span>
              <div class="mini-progress"><i style="width:${Math.max(8, item.qty / maxQty * 100)}%"></i></div>
            </div>
          </article>`;
      }).join("")
    : '<div class="empty-inline">Noch keine Artikel verkauft.</div>';
}
function cancelSale(id) {
  const sale = state.sales.find(s => s.id === id);
  if (!sale || sale.status === "cancelled") return;
  if (!confirm(`Verkauf über ${money(sale.total)} wirklich stornieren?`)) return;
  sale.status = "cancelled";
  sale.cancelledAt = new Date().toISOString();
  saveState();
  renderSales();
  const drawer = document.getElementById("saleDetailDrawer");
  if (drawer?.classList.contains("open")) showSaleDetail(id);
}

function showSaleDetail(id) {
  const sale = state.sales.find(s => s.id === id);
  if (!sale) return;
  const parts = saleDateParts(sale);
  const drawer = document.getElementById("saleDetailDrawer");

  document.getElementById("saleDetailTitle").textContent =
    `Verkauf #${Math.max(1, state.sales.findIndex(s => s.id === id) + 1)}`;
  document.getElementById("saleDetailMeta").textContent = `${parts.date} um ${parts.time} Uhr`;

  document.getElementById("saleDetailContent").innerHTML = `
    <div class="drawer-status-row">
      <span class="status-pill ${sale.status === "cancelled" ? "cancelled" : "completed"}">
        ${sale.status === "cancelled" ? "Storniert" : "Abgeschlossen"}
      </span>
    </div>

    <section class="drawer-section">
      <h3>Artikel</h3>
      <div class="drawer-items">
        ${sale.items.map(i => `
          <div class="drawer-item">
            <span><b>${i.qty}×</b> ${escapeHtml(i.name)}</span>
            <strong>${money(i.qty * i.unitPrice)}</strong>
          </div>`).join("")}
      </div>
    </section>

    <section class="drawer-section drawer-totals">
      <div><span>Summe</span><strong>${money(sale.total)}</strong></div>
      <div><span>Gegeben</span><strong>${money(sale.given)}</strong></div>
      <div><span>Rückgeld</span><strong class="drawer-change">${money(sale.change)}</strong></div>
    </section>

    <section class="drawer-section">
      <h3>Zahlungsmethode</h3>
      <div class="payment-method">▣ <span>Barzahlung</span></div>
    </section>

    ${sale.status === "completed" ? `
      <button id="drawerCancelSaleBtn" class="drawer-cancel-btn" type="button">↶ Verkauf stornieren</button>
    ` : `
      <div class="drawer-cancelled-note">Dieser Verkauf wurde storniert.</div>
    `}
  `;

  const cancelButton = document.getElementById("drawerCancelSaleBtn");
  if (cancelButton) cancelButton.addEventListener("click", () => cancelSale(id));

  drawer.dataset.saleId = id;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.getElementById("saleDrawerBackdrop").classList.add("open");
}

function closeSaleDetail() {
  const drawer = document.getElementById("saleDetailDrawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  document.getElementById("saleDrawerBackdrop").classList.remove("open");
}
function renderSettings() {
  const hapticsToggle = document.getElementById("hapticsToggle");
  if (hapticsToggle) hapticsToggle.checked = state.hapticsEnabled !== false;
  renderAppName();
  const list = document.getElementById("settingsList");
  list.innerHTML = "";

  sortedProducts().forEach((p, index, arr) => {
    const row = document.createElement("div");
    row.className = `settings-row ${p.active ? "" : "is-inactive"}`;
    row.draggable = true;
    row.dataset.productId = p.id;

    const preview = p.imageData
      ? `<img class="settings-thumb" src="${p.imageData}" alt="" />`
      : `<div class="settings-thumb fallback">${escapeHtml(p.icon || p.name.slice(0,1).toUpperCase())}</div>`;

    row.innerHTML = `
      <div class="drag-handle" title="Ziehen zum Verschieben" aria-hidden="true">⋮⋮</div>
      <div class="product-setting-main">
        ${preview}
        <div class="setting-copy">
          <div class="name">${escapeHtml(p.name)}</div>
          <div class="setting-meta-line">
            <span>${p.category === "food" ? "Essen" : "Getränk"}</span>
            <span>•</span>
            <strong>${money(p.price)}</strong>
            <span>•</span>
            <span>Position ${index + 1}</span>
          </div>
        </div>
      </div>

      <div class="settings-right">
        <div class="order-controls" aria-label="Reihenfolge ändern">
          <button type="button" data-up ${index === 0 ? "disabled" : ""} title="Nach oben">↑</button>
          <button type="button" data-down ${index === arr.length - 1 ? "disabled" : ""} title="Nach unten">↓</button>
        </div>

        <label class="toggle-wrap" title="${p.active ? "Artikel deaktivieren" : "Artikel aktivieren"}">
          <input type="checkbox" data-active ${p.active ? "checked" : ""} />
          <span class="toggle"></span>
          <span class="toggle-text">${p.active ? "Aktiv" : "Inaktiv"}</span>
        </label>

        <div class="settings-action-group">
          <button type="button" class="edit-product-btn" data-edit>Bearbeiten</button>
          <button type="button" class="delete-product-btn" data-delete>Löschen</button>
        </div>
      </div>`;

    row.querySelector("[data-up]").addEventListener("click", () => moveProduct(p.id, -1));
    row.querySelector("[data-down]").addEventListener("click", () => moveProduct(p.id, 1));
    row.querySelector("[data-active]").addEventListener("change", (e) => {
      p.active = e.target.checked;
      saveState();
      renderSettings();
      renderProducts();
    });
    row.querySelector("[data-edit]").addEventListener("click", () => openProductDialog(p.id));
    row.querySelector("[data-delete]").addEventListener("click", () => deleteProduct(p.id));

    // V0.22.2.1: Die Artikelkarte öffnet den Editor auf allen Geräten.
    // Interaktive Bedienelemente behalten ihre eigene Funktion.
    row.addEventListener("click", (e) => {
      if (e.target.closest("button, input, label, .drag-handle")) return;
      haptic(10);
      openProductDialog(p.id);
    });

    row.addEventListener("dragstart", (e) => {
      row.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", p.id);
    });
    row.addEventListener("dragend", () => {
      row.classList.remove("dragging");
      document.querySelectorAll(".settings-row.drag-over").forEach(el => el.classList.remove("drag-over"));
    });
    row.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      row.classList.add("drag-over");
    });
    row.addEventListener("dragleave", () => row.classList.remove("drag-over"));
    row.addEventListener("drop", (e) => {
      e.preventDefault();
      row.classList.remove("drag-over");
      const draggedId = e.dataTransfer.getData("text/plain");
      if (!draggedId || draggedId === p.id) return;
      reorderProductByDrop(draggedId, p.id);
    });

    list.appendChild(row);
  });
}
function reorderProductByDrop(draggedId, targetId) {
  const ordered = sortedProducts();
  const fromIndex = ordered.findIndex(p => p.id === draggedId);
  const toIndex = ordered.findIndex(p => p.id === targetId);
  if (fromIndex < 0 || toIndex < 0) return;

  const [moved] = ordered.splice(fromIndex, 1);
  ordered.splice(toIndex, 0, moved);
  ordered.forEach((p, i) => p.order = i + 1);
  state.products = ordered;
  saveState();
  renderSettings();
  renderProducts();
}

function deleteProduct(id) {
  const product = getProduct(id);
  if (!product) return;

  const usedInSales = state.sales.some(sale => sale.items.some(item => item.productId === id));
  const extra = usedInSales
    ? "\n\nDer Artikel wurde bereits verkauft. Alte Verkäufe bleiben mit den damals gespeicherten Daten erhalten."
    : "";

  if (!confirm(`Artikel „${product.name}“ wirklich löschen?${extra}`)) return;

  state.products = state.products.filter(p => p.id !== id);
  normalizeOrder();
  cart.delete(id);
  saveState();
  renderSettings();
  renderProducts();
  renderCart();
}

function moveProduct(id, delta) {
  const arr = sortedProducts();
  const idx = arr.findIndex(p => p.id === id);
  const target = idx + delta;
  if (idx < 0 || target < 0 || target >= arr.length) return;
  [arr[idx], arr[target]] = [arr[target], arr[idx]];
  arr.forEach((p,i) => p.order = i + 1);
  saveState();
  renderSettings();
  renderProducts();
}

let pendingProductImageData = null;

function updateProductImagePreview(dataUrl) {
  const preview = document.getElementById("productImagePreview");
  const text = document.getElementById("imageDropText");
  const removeBtn = document.getElementById("removeProductImageBtn");
  if (dataUrl) {
    preview.src = dataUrl;
    preview.hidden = false;
    text.textContent = "Anderes Bild auswählen";
    removeBtn.style.visibility = "visible";
  } else {
    preview.removeAttribute("src");
    preview.hidden = true;
    text.textContent = "Bild auswählen";
    removeBtn.style.visibility = "hidden";
  }
}

function compressImage(file, maxWidth = 640, maxHeight = 420, quality = 0.78) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width, maxHeight / img.height);
        const width = Math.max(1, Math.round(img.width * scale));
        const height = Math.max(1, Math.round(img.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function openProductDialog(id = null) {
  const dialog = document.getElementById("productDialog");
  showProductFormMessage("");
  const p = id ? getProduct(id) : null;
  document.getElementById("dialogTitle").textContent = p ? "Artikel bearbeiten" : "Artikel hinzufügen";
  document.getElementById("productIdInput").value = p?.id || "";
  document.getElementById("productNameInput").value = p?.name || "";
  document.getElementById("productCategoryInput").value = p?.category || "food";
  document.getElementById("productPriceInput").value = p ? p.price.toFixed(2).replace(".", ",") : "";
  document.getElementById("productColorInput").value = p?.color || (p?.category === "drink" ? "#9fc8d8" : "#f2c66d");
  document.getElementById("productColorValue").textContent = document.getElementById("productColorInput").value;
  document.getElementById("productIconInput").value = p?.icon || "";
  document.getElementById("productActiveInput").checked = p ? p.active : true;
  document.getElementById("productImageInput").value = "";
  pendingProductImageData = p?.imageData || "";
  updateProductImagePreview(pendingProductImageData);
  dialog.showModal();
}

function showProductFormMessage(message) {
  const box = document.getElementById("productFormMessage");
  if (!box) return;

  if (!message) {
    box.hidden = true;
    box.textContent = "";
    return;
  }

  box.textContent = message;
  box.hidden = false;
}

function createProductId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `p-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function saveProductFromForm(e) {
  if (e) e.preventDefault();
  showProductFormMessage("");

  try {
    const id = document.getElementById("productIdInput").value;
    const nameInput = document.getElementById("productNameInput");
    const categoryInput = document.getElementById("productCategoryInput");
    const priceInput = document.getElementById("productPriceInput");
    const colorInput = document.getElementById("productColorInput");
    const iconInput = document.getElementById("productIconInput");
    const activeInput = document.getElementById("productActiveInput");

    const name = nameInput.value.trim();
    const category = categoryInput.value;
    const rawPrice = priceInput.value.trim();
    const normalizedPrice = rawPrice.replace(",", ".");
    const price = Number(normalizedPrice);
    const color = colorInput.value || "#d8eadf";
    const icon = iconInput.value.trim();
    const active = activeInput.checked;
    const imageData = pendingProductImageData || "";

    if (!name) {
      showProductFormMessage("Bitte gib einen Artikelnamen ein.");
      nameInput.focus();
      return;
    }

    if (rawPrice === "" || !/^\d+(?:[.,]\d{1,2})?$/.test(rawPrice) || !Number.isFinite(price) || price < 0) {
      showProductFormMessage("Bitte gib einen gültigen Preis ein, z. B. 4,50.");
      priceInput.focus();
      return;
    }

    if (id) {
      const product = getProduct(id);
      if (!product) {
        showProductFormMessage("Der Artikel wurde nicht gefunden.");
        return;
      }
      Object.assign(product, { name, category, price, color, icon, active, imageData });
    } else {
      state.products.push({
        id: createProductId(),
        name,
        category,
        price,
        color,
        icon,
        active,
        imageData,
        order: state.products.length + 1
      });
    }

    normalizeOrder();

    try {
      saveState();
    } catch (storageError) {
      console.error(storageError);
      showProductFormMessage("Der Browser konnte die Daten nicht speichern. Eventuell ist der lokale Speicher voll.");
      return;
    }

    renderSettings();
    renderProducts();
    renderCart();

    document.getElementById("productDialog").close();
  } catch (error) {
    console.error(error);
    showProductFormMessage(`Speichern fehlgeschlagen: ${error?.message || "Unbekannter Fehler"}`);
  }
}
function buildExportRows() {
  const sales = filteredSales();
  const products = currentExportProducts();
  const headers = ["Datum", "Uhrzeit", ...products.map(p => p.name), "Gesamtpreis", "Status"];
  const rows = [headers];

  for (const sale of sales) {
    const parts = saleDateParts(sale);
    const qty = Object.fromEntries(sale.items.map(i => [i.productId, i.qty]));
    rows.push([
      parts.date,
      parts.time,
      ...products.map(p => qty[p.id] || 0),
      sale.total.toFixed(2).replace(".", ","),
      sale.status === "cancelled" ? "Storniert" : "Abgeschlossen"
    ]);
  }
  return rows;
}

function csvEscape(value) {
  const s = String(value ?? "");
  return `"${s.replace(/"/g, '""')}"`;
}

function exportCsv() {
  const rows = buildExportRows();
  const csv = rows.map(r => r.map(csvEscape).join(";")).join("\r\n");
  downloadBlob(new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" }),
    `kassenapp_verkaeufe_${new Date().toISOString().slice(0,10)}.csv`);
}

async function copySales() {
  const rows = buildExportRows();
  const tsv = rows.map(r => r.join("\t")).join("\n");
  try {
    await navigator.clipboard.writeText(tsv);
    alert("Verkaufstabelle wurde in die Zwischenablage kopiert.");
  } catch {
    alert("Kopieren wurde vom Browser blockiert. Bitte nutze stattdessen den CSV-Export.");
  }
}

function backupData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  downloadBlob(blob, `kassenapp_sicherung_${new Date().toISOString().slice(0,10)}.json`);
}

function restoreData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed.products || !parsed.sales) throw new Error("Ungültiges Format");
      const defaultColors = ["#f2c66d", "#e8a98d", "#e6bd86", "#9fc8d8", "#9fcbb3", "#b7c6e6"];
      parsed.products = parsed.products.map((p, i) => ({
        ...p,
        imageData: p.imageData || "",
        color: p.color || defaultColors[i % defaultColors.length]
      }));
      state = parsed;
      normalizeOrder();
      saveState();
      cart.clear();
      renderAll();
setPaymentMode(state.paymentMode || "quick", false);
      alert("Sicherung wurde erfolgreich eingelesen.");
    } catch {
      alert("Die Datei konnte nicht als gültige KassenApp-Sicherung gelesen werden.");
    }
  };
  reader.readAsText(file);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderAll() {
  const versionLabel = document.getElementById("appVersionLabel");
  if (versionLabel) versionLabel.textContent = APP_VERSION;
  renderAppName();
  renderProducts();
  renderCart();
  renderSales();
  renderSettings();
}


document.querySelectorAll(".nav-btn").forEach(btn =>
  btn.addEventListener("click", () => switchView(btn.dataset.view))
);

function setMobileMenuState(open) {
  const sidebar = document.getElementById("appSidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  const button = document.getElementById("mobileMenuBtn");

  sidebar.classList.toggle("mobile-open", open);
  backdrop.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);

  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  button.textContent = open ? "×" : "☰";
}

function openMobileMenu() {
  setMobileMenuState(true);
}

function closeMobileMenu() {
  setMobileMenuState(false);
}

function toggleMobileMenu(event) {
  event?.preventDefault();
  event?.stopPropagation();
  const isOpen = document.getElementById("appSidebar").classList.contains("mobile-open");
  setMobileMenuState(!isOpen);
}

document.getElementById("mobileMenuBtn").addEventListener("click", toggleMobileMenu);
document.getElementById("closeMobileMenuBtn").addEventListener("click", closeMobileMenu);
document.getElementById("sidebarBackdrop").addEventListener("click", closeMobileMenu);
document.querySelectorAll(".app-sidebar .nav-btn").forEach(btn => btn.addEventListener("click", closeMobileMenu));


document.getElementById("givenInput").addEventListener("input", updateChange);
document.querySelectorAll("[data-payment-mode]").forEach(btn =>
  btn.addEventListener("click", () => setPaymentMode(btn.dataset.paymentMode))
);
document.querySelectorAll("[data-money]").forEach(btn =>
  btn.addEventListener("click", () => {
    document.getElementById("givenInput").value = btn.dataset.money;
    updateChange();
    haptic(16);
    btn.blur();
  })
);
document.getElementById("exactBtn").addEventListener("click", (event) => {
  document.getElementById("givenInput").value = cartTotal().toFixed(2).replace(".", ",");
  updateChange();
  haptic(18);
  event.currentTarget.blur();
});
document.querySelectorAll("[data-keypad]").forEach(btn =>
  btn.addEventListener("click", () => {
    handleKeypadPress(btn.dataset.keypad);
    haptic(14);
    btn.blur();
  })
);
document.getElementById("keypadBackspaceBtn").addEventListener("click", (event) => {
  keypadSequence = keypadSequence.slice(0, -1);
  syncKeypadInput();
  haptic(14);
  event.currentTarget.blur();
});
document.getElementById("keypadExactBtn").addEventListener("click", (event) => {
  keypadSequence = amountToKeypadSequence(cartTotal());
  syncKeypadInput();
  haptic(18);
  event.currentTarget.blur();
});
document.getElementById("clearCartBtn").addEventListener("click", () => clearCart(true));
document.getElementById("completeSaleBtn").addEventListener("click", completeSale);

document.getElementById("statusFilter").addEventListener("change", () => {
  salesPage = 1;
  renderSales();
});
document.getElementById("exportCsvBtn").addEventListener("click", exportCsv);

document.getElementById("pageSizeSelect").addEventListener("change", (e) => {
  salesPageSize = Number(e.target.value) || 10;
  salesPage = 1;
  renderSales();
});
document.getElementById("prevPageBtn").addEventListener("click", () => {
  if (salesPage > 1) {
    salesPage -= 1;
    renderSales();
  }
});
document.getElementById("nextPageBtn").addEventListener("click", () => {
  const totalPages = Math.max(1, Math.ceil(filteredSales().length / salesPageSize));
  if (salesPage < totalPages) {
    salesPage += 1;
    renderSales();
  }
});
document.getElementById("copySalesBtn").addEventListener("click", copySales);

document.getElementById("addProductBtn").addEventListener("click", () => openProductDialog());
const productPriceInput = document.getElementById("productPriceInput");

productPriceInput.addEventListener("input", (e) => {
  let value = e.target.value;

  // Nur Ziffern und ein Dezimaltrenner erlauben.
  value = value.replace(/[^\d,.]/g, "");

  const firstSeparator = value.search(/[,.]/);
  if (firstSeparator !== -1) {
    const before = value.slice(0, firstSeparator);
    const after = value.slice(firstSeparator + 1).replace(/[,.]/g, "").slice(0, 2);
    const separator = value[firstSeparator];
    value = `${before}${separator}${after}`;
  }

  e.target.value = value;
});

productPriceInput.addEventListener("keydown", (e) => {
  const allowed = [
    "Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight",
    "Home", "End", "Enter"
  ];
  if (allowed.includes(e.key) || e.ctrlKey || e.metaKey) return;
  if (/^\d$/.test(e.key)) return;
  if ((e.key === "," || e.key === ".") && !/[,.]/.test(e.currentTarget.value)) return;
  e.preventDefault();
});

document.getElementById("productForm").addEventListener("submit", saveProductFromForm);
document.getElementById("productColorInput").addEventListener("input", (e) => {
  document.getElementById("productColorValue").textContent = e.target.value;
});
document.getElementById("cancelProductBtn").addEventListener("click", () => document.getElementById("productDialog").close());
document.getElementById("closeProductDialogBtn").addEventListener("click", () => document.getElementById("productDialog").close());

document.getElementById("productImageInput").addEventListener("change", async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    alert("Bitte wähle eine Bilddatei aus.");
    return;
  }
  try {
    pendingProductImageData = await compressImage(file);
    updateProductImagePreview(pendingProductImageData);
  } catch {
    alert("Das Bild konnte nicht verarbeitet werden.");
  }
});

document.getElementById("removeProductImageBtn").addEventListener("click", () => {
  pendingProductImageData = "";
  document.getElementById("productImageInput").value = "";
  updateProductImagePreview("");
});

document.getElementById("appNameInput").addEventListener("change", (e) => {
  state.appName = e.target.value.trim() || "KassenApp";
  saveState();
  renderAppName();
});

document.getElementById("backupBtn").addEventListener("click", backupData);
document.getElementById("restoreInput").addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) restoreData(file);
  e.target.value = "";
});

document.getElementById("closeSaleDetailBtn").addEventListener("click", closeSaleDetail);
document.getElementById("saleDrawerBackdrop").addEventListener("click", closeSaleDetail);


const saveProductBtn = document.getElementById("saveProductBtn");
if (saveProductBtn) {
  saveProductBtn.addEventListener("click", saveProductFromForm);
}

const hapticsToggle = document.getElementById("hapticsToggle");
if (hapticsToggle) {
  hapticsToggle.addEventListener("change", (e) => {
    state.hapticsEnabled = e.target.checked;
    saveState();
    if (state.hapticsEnabled) haptic(20);
  });
}

renderAll();
