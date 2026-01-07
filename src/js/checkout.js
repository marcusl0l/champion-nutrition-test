// Checkout Page JavaScript

function getCart() {
    return JSON.parse(localStorage.getItem('championCart')) || [];
}

function displayOrderSummary() {
    const cart = getCart();
    const orderItems = document.getElementById('orderItems');
    const orderItemCount = document.getElementById('orderItemCount');
    
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    orderItemCount.textContent = totalItems;
    
    orderItems.innerHTML = cart.map(item => `
        <div class="order-item">
            <span>${item.name} × ${item.quantity}</span>
            <span>${item.price}</span>
        </div>
    `).join('');
}

// Handle checkout form submission
document.addEventListener('DOMContentLoaded', function() {
    displayOrderSummary();
    
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submitOrder');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        const cart = getCart();
        const formData = {
            fullName: this.fullName.value,
            email: this.email.value,
            phone: this.phone.value,
            address: this.address.value,
            city: this.city.value,
            postcode: this.postcode.value,
            notes: this.notes.value,
            items: cart,
            orderDate: new Date().toISOString()
        };
        
        try {
            // TODO: Replace with actual Lambda endpoint for order processing
            // const response = await fetch('YOUR_LAMBDA_ENDPOINT', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
            
            // Simulate success for now
            setTimeout(() => {
                // Clear cart
                localStorage.removeItem('championCart');
                
                // Show success message
                alert('Thank you for your order inquiry!\n\nWe have received your request and will contact you shortly with pricing and payment details.\n\nOrder details have been sent to your email: ' + formData.email);
                
                // Redirect to home
                window.location.href = 'index.html';
            }, 1500);
            
        } catch (error) {
            console.error('Order submission error:', error);
            alert('Sorry, there was an error submitting your order. Please try again or contact us directly at info@championnutrition.net.nz');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
});
