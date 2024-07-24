document.addEventListener('DOMContentLoaded', function () {
  // Fetch cart items and initialize
  const cartItems = [
      { id: 1, name: 'Plant Pot', price: 250 },
      { id: 2, name: 'Fertilizer', price: 150 },
      { id: 3, name: 'Watering Can', price: 100 },
      { id: 4, name: 'Watering Can', price: 100 },
      { id: 5, name: 'Watering Can', price: 100 },
      { id: 6, name: 'Watering Can', price: 100 },
      { id: 7, name: 'Cordyline Plant', price: 100 },
      { id: 8, name: 'Shrub Ornamental plant', price: 100 }
  ];

  const cartList = document.getElementById('cart-items');
  const itemCountBadge = document.getElementById('item-count');
  const totalPrice = document.getElementById('total-price');
  const checkoutForm = document.getElementById('checkout-form');

  // Function to render cart items
  function renderCartItems() {
      cartList.innerHTML = '';
      let total = 0;
      cartItems.forEach(item => {
          const li = document.createElement('li');
          li.className = 'list-group-item d-flex justify-content-between lh-sm';
          li.innerHTML = `
              <div>
                  <h6 class="my-0">${item.name}</h6>
                  <small class="text-muted">Rs ${item.price}</small>
              </div>
              <span class="text-muted">Qty 1</span>
          `;
          cartList.appendChild(li);
          total += item.price;
      });
      itemCountBadge.textContent = cartItems.length;
      totalPrice.textContent = total;
  }

  // Initial render of cart items
  renderCartItems();

  // Form validation and submission handling
  checkoutForm.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();
      if (checkoutForm.checkValidity()) {
          // Form is valid, proceed with checkout logic here
          alert('Form submitted! Implement your checkout logic.');
      }
      checkoutForm.classList.add('was-validated');
  });

  // Example: Handle theme toggling (if required)
  const themeToggle = document.getElementById('bd-theme');
  const themeText = document.getElementById('bd-theme-text');
  themeToggle.addEventListener('click', function () {
      // Implement theme toggling logic here
      console.log('Theme toggled.');
  });
});
