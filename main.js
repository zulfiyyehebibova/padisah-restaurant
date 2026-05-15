const products = [
  {
    id: 1,
    name: "Çoban Salatı",
    price: 5.5,
    cat: "salat",
    img: "https://mado.az/uploads/product/1312/oban_salat_1764241366.jpg",
  },
  {
    id: 2,
    name: "Sezar Salatı",
    price: 7.0,
    cat: "salat",
    img: "https://evdar.az/wp-content/uploads/Dadli-v%C9%99-Yungul-Krevetkali-Sezar-Salati2.jpg",
  },
  {
    id: 3,
    name: "Asiya Salatı",
    price: 7.0,
    cat: "salat",
    img: "https://cafecity.az/media/product_image/AS%C4%B0YA-SAYA%C4%9EI-%C6%8FT-SALATI.jpg.600x600_q85_box-0%2C0%2C600%2C600_crop_detail.jpg",
  },
  {
    id: 4,
    name: "Feta Salatı",
    price: 7.0,
    cat: "salat",
    img: "https://dietsabc.com/wp-content/uploads/2025/03/Salati-ar-hurmu-un-Fetas-sieru.jpg",
  },
  {
    id: 5,
    name: "Marqarita Pizza",
    price: 12.0,
    cat: "pizza",
    img: "https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-margherita-pizza-1611491820.jpg",
  },
  {
    id: 6,
    name: "Pepperoni Pizza",
    price: 14.0,
    cat: "pizza",
    img: "https://www.bellamama-grillhaus.de/images/product_images/original_images/napoli-schinken-salami-pilze-peperoni.jpg",
  },
  {
    id: 7,
    name: "Göbələkli Pizza",
    price: 14.0,
    cat: "pizza",
    img: "https://i.ytimg.com/vi/n0zSMH1H3E0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBY_v59BUeFxIss-5yFU4oZSAvP9g",
  },
  {
    id: 8,
    name: "Toyuqlu Pizza",
    price: 14.0,
    cat: "pizza",
    img: "https://pizzabruno.az/wp-content/uploads/2018/06/TOYUQLU.jpg",
  },
  {
    id: 9,
    name: "Lülə Kabab",
    price: 13.0,
    cat: "kabab",
    img: "https://qebulol.az/wp-content/uploads/2025/07/%D0%BB%D1%8E%D0%BB%D1%8F.jpeg",
  },
  {
    id: 10,
    name: "Toyuq Kababı",
    price: 11.0,
    cat: "kabab",
    img: "https://imageproxy.wolt.com/menu/menu-images/630cb83afbdbef27a5b7f423/5944752a-279d-11ed-bddd-bac9ace58a03_toyuq_qarisiq.jpeg",
  },
  {
    id: 11,
    name: "Urfa Kababı",
    price: 11.0,
    cat: "kabab",
    img: "https://imageproxy.wolt.com/menu/menu-images/6193902df661507655d611d9/a54053d8-484e-11ec-aebf-9e7682ef4acd_urfa_kabab.jpeg",
  },
  {
    id: 12,
    name: "Quzu Kababı",
    price: 11.0,
    cat: "kabab",
    img: "https://cafecity.az/media/product_image/%D0%90%D0%BD%D1%82%D1%80%D0%B5%D0%BA%D0%BE%D1%82-%D1%8F%D0%B3%D0%BD%D0%B5%D0%BD%D0%BA%D0%B0.png.600x600_q85_box-0%2C0%2C1200%2C1200_crop_detail.jpg",
  },
  {
    id: 13,
    name: "Sucuklu Pide",
    price: 11.0,
    cat: "pide",
    img: "https://i.lezzet.com.tr/images-xxlarge/sucuklu-kasarli-pide-tarifi-4c6b6170-eabb-4185-8bb6-5d2c3ee769de",
  },
  {
    id: 14,
    name: "Sosisli Pide",
    price: 15.0,
    cat: "pide",
    img: "https://imageproxy.wolt.com/menu/menu-images/shared/1499de3a-2227-11ee-9618-1a20acf8f50d_29.jpg",
  },
  {
    id: 15,
    name: "Qiyməli Pide",
    price: 11.0,
    cat: "pide",
    img: "https://recipesblob.droetker.com.tr/assets/eceff4f9b37e4abcabbc491de59fb60e/1272x764/kiymali-pide-24.webp",
  },
  {
    id: 16,
    name: "Kaşarlı Pide",
    price: 9.0,
    cat: "pide",
    img: "https://bistroloungemenu.hacimehmetsan.com/uploads/urunler/1743945894.png",
  },
];

let cart = [];
let activeFilter = "all";

function renderProducts(filter, search = "") {
  const grid = document.getElementById("productGridItems");
  const query = search.trim().toLowerCase();

  let filtered = filter === "all" ? products : products.filter((p) => p.cat === filter);

  if (query) {
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(query));
  }

  grid.innerHTML = "";

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fa-solid fa-bowl-food"></i>
        <p>"${search}" üçün nəticə tapılmadı</p>
        <span>Başqa bir söz yoxlayın</span>
      </div>
    `;
    return;
  }

  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="product-card-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        <div class="product-badge">${p.cat}</div>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="product-meta">
          <div class="product-price">${p.price.toFixed(2)} <span>₼</span></div>
          <button class="add-btn" data-id="${p.id}">
            <i class="fa-solid fa-plus"></i> Əlavə Et
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
    setTimeout(() => card.classList.add("visible"), 50 + i * 80);
  });

  grid.querySelectorAll(".product-card").forEach((el) => el.classList.add("visible"));
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <img src="${item.img}" alt="${item.name}"/>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <b>${item.price.toFixed(2)} ₼</b>
      </div>
      <button class="trash-btn" data-index="${index}">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    cartItems.appendChild(el);
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;

  // Trash buttons
  document.querySelectorAll(".trash-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      cart.splice(parseInt(btn.dataset.index), 1);
      updateCart();
    });
  });
}

// Filter buttons
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.cat;
    renderProducts(activeFilter);
  });
});

// Add to cart (delegated)
document.getElementById("productGridItems").addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  const product = products.find((p) => p.id === parseInt(btn.dataset.id));
  if (product) {
    cart.push({ ...product });
    updateCart();

    // Micro-feedback
    btn.textContent = "✓ Əlavə Edildi";
    btn.style.background = "#254d3e";
    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-plus"></i> Əlavə Et';
      btn.style.background = "";
    }, 1200);
  }
});

// Clear cart
document.getElementById("cartClear").addEventListener("click", () => {
  cart = [];
  updateCart();
});

// Search input
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");

searchInput.addEventListener("input", () => {
  const val = searchInput.value;
  searchClear.classList.toggle("visible", val.length > 0);
  renderProducts(activeFilter, val);
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  searchClear.classList.remove("visible");
  searchInput.focus();
  renderProducts(activeFilter, "");
});

// Drinks filter
document.querySelectorAll(".drinks-filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".drinks-filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.drink;
    document.querySelectorAll(".drink-card").forEach((card) => {
      card.classList.toggle("hidden", cat !== "all" && card.dataset.drink !== cat);
    });
  });
});

// Drinks — səbətə əlavə
document.getElementById("drinksGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".drink-add-btn");
  if (!btn) return;
  // img: həmin kartın şəklini götür
  const img = btn.closest(".drink-card").querySelector("img").src;
  cart.push({ name: btn.dataset.name, price: parseFloat(btn.dataset.price), img });
  updateCart();
  const orig = btn.innerHTML;
  btn.innerHTML = "✓ Əlavə Edildi";
  btn.style.background = "#254d3e";
  setTimeout(() => { btn.innerHTML = orig; btn.style.background = ""; }, 1200);
});

// Desserts — səbətə əlavə
document.querySelectorAll(".dessert-add-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    cart.push({
      name: btn.dataset.name,
      price: parseFloat(btn.dataset.price),
      img: btn.dataset.img,
    });
    updateCart();
    const orig = btn.textContent;
    btn.textContent = "✓ Əlavə Edildi";
    btn.style.background = "var(--gold)";
    btn.style.color = "var(--ink)";
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.background = "";
      btn.style.color = "";
    }, 1200);
  });
});

const drinkCards = document.querySelectorAll(".drink-card");

drinkCards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add("visible");
  }, index * 100);
});

// Cart open/close are handled in inline script in HTML

// Init
renderProducts("all");
