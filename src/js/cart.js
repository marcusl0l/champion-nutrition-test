// Shopping Cart Page JavaScript

function getCart() {
    return JSON.parse(localStorage.getItem('championCart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('championCart', JSON.stringify(cart));
}

function updateCartDisplay() {
    const cart = getCart();
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const itemCount = document.getElementById('itemCount');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cart.length === 0) {
        document.querySelector('.cart-container').style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }
    
    document.querySelector('.cart-container').style.display = 'grid';
    emptyCart.style.display = 'none';
    
    // Calculate total items
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    itemCount.textContent = totalItems;
    
    // Display cart items
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="cart-item-price">${item.price}</p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        </div>
    `).join('');
}

function updateQuantity(index, change) {
    const cart = getCart();
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    saveCart(cart);
    updateCartDisplay();
}

function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    updateCartDisplay();
}

function proceedToCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    window.location.href = 'checkout.html';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateCartDisplay);
