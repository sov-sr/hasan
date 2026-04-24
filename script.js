body { background-color: #f4f4f4; font-family: 'Cairo', sans-serif; }
.hero-section {
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                url('https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=1350&q=80');
    background-size: cover; height: 50vh;
}
.product-card { border: none; border-radius: 12px; transition: 0.3s; }
.product-card:hover { transform: scale(1.03); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
.product-img { height: 250px; object-fit: cover; border-radius: 12px 12px 0 0; }
.btn-primary { background-color: #2c3e50; border: none; }
.btn-primary:hover { background-color: #1a252f; }    document.getElementById('cart-count').innerText = cart.length;
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
