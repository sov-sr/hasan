// قائمة المنتجات في متجر الحسن
const products = [
    { id: 1, name: "لابتوب Elhasan Pro", price: 1500, img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500" },
    { id: 2, name: "هاتف ذكي S24", price: 900, img: "https://images.unsplash.com/photo-1511704976887-efc178383e67?w=500" },
    { id: 3, name: "سماعة عازلة للضجيج", price: 200, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 4, name: "ساعة ذكية", price: 300, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" }
];

let cart = [];

// عرض المنتجات في الصفحة
function displayProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(product => `
        <div class="col-md-3 mb-4">
            <div class="card product-card h-100">
                <img src="${product.img}" class="card-img-top product-img" alt="${product.name}">
                <div class="card-body text-center d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-primary fw-bold">${product.price} $</p>
                    <button onclick="addToCart(${product.id})" class="btn btn-primary mt-auto">إضافة للسلة</button>
                </div>
            </div>
        </div>
    `).join('');
}

// إضافة منتج للسلة
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateUI();
}

// تحديث واجهة السلة
function updateUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItems = document.getElementById('cart-items');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center">السلة فارغة</p>';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="d-flex justify-content-between mb-2">
                <span>${item.name}</span>
                <span>${item.price} $</span>
            </div>
        `).join('');
    }
    document.getElementById('cart-total').innerText = `${total} $`;
}

// محاكاة عملية الدفع
function processPayment() {
    if (cart.length === 0) return alert("سلتك فارغة!");
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert(`شكراً لثقتك بمتجر Elhasan. سيتم تحويلك لبوابة الدفع الآمنة لدفع ${total} $`);
    
    // هنا يمكنك إضافة Stripe API Redirect
    cart = [];
    updateUI();
}

document.addEventListener('DOMContentLoaded', displayProducts);
