const menuItems = [
    { name: 'Espresso', price: 3.50, image: 'esspresso1.jpeg' }, 
    { name: 'Cappuccino', price: 4.50, image: 'images/cappucino.jpeg' },
    { name: 'Iced Latte', price: 5.00, image: 'images/icedlatte.jpeg' },
    { name: 'Croissant', price: 3.75, image: 'images/croissant.jpeg' },
    { name: 'Blueberry Muffin', price: 4.00, image: 'images/blueberry-muffins2.jpeg' },
    { name: "Chef's special cheesecake", price: 7.50, image: 'images/cheescake.jpeg' }
  ];
  
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  function initMenu() {
    const menuGrid = document.getElementById('menu-items');
    menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.className = 'menu-item';
      menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p class="price">$${item.price.toFixed(2)}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
      `;
      menuGrid.appendChild(menuItem);
    });
  }
  
  function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function decreaseQuantity(name) {
    const item = cart.find(item => item.name === name);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        cart = cart.filter(i => i.name !== name);
      }
    }
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalEl = document.getElementById('cart-total');
    const cartCountEl = document.getElementById('cart-count');
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
  
    cart.forEach(item => {
      total += item.price * item.quantity;
  
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <div class="cart-item-details">
          <span>${item.name}</span>
          <button class="quantity-btn" onclick="decreaseQuantity('${item.name}')">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="addToCart('${item.name}', ${item.price})">+</button>
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
        <button class="remove-btn" onclick="removeFromCart('${item.name}')">&times;</button>
      `;
      cartItemsContainer.appendChild(div);
    });
  
    cartTotalEl.textContent = total.toFixed(2);
    cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  }
  
  function toggleCart() {
    document.getElementById('cart').classList.toggle('cart-visible');
  }
  
  function checkout() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert('Thank you for your order! Total: $' + total.toFixed(2));
    cart = [];
    localStorage.removeItem('cart');
    updateCart();
    toggleCart();
  }
  
  function gotomenu() {
    document.getElementById("menu-page").addEventListener("click", function() {
      window.location.href = "menu4.html";
    });
  }
  
  function refreshPage() {
    location.reload();
  }
  
  initMenu();
  updateCart();