const products = [
  {
    name: 'Iced Latte',
    price: 5.00,
    category: 'cold-drinks',
    image: 'images/icedlatte.jpeg',
    ingredients: 'Espresso, milk, ice, vanilla syrup'
  },
  {
    name: 'Cold Brew',
    price: 4.50,
    category: 'cold-drinks',
    image: 'images/coldbrew.jpeg',
    ingredients: 'Cold brew coffee, water, ice'
  },

 { name: 'Frappuccino',
  price: 4.00,
  category: 'cold-drinks',
  image: 'images/frapuccino.jpeg',
  ingredients: 'Espresso, milk, ice, Chocolate syrup'
},

{ name: 'Orange Juice',
  price: 4.00,
  category: 'cold-drinks',
  image: 'images/orange.jpeg',
  ingredients: 'Freshly squeezed oranges'
},

  {
    name: 'Espresso',
    price: 2.50,
    category: 'hot-drinks',
    image: 'esspresso1.jpeg',
    ingredients: 'Freshly ground coffee beans'
  },
  {
    name: 'Cappuccino',
    price: 4.50,
    category: 'hot-drinks',
    image: 'images/cappucino.jpeg',
    ingredients: 'Espresso, steamed milk, foam'
  },
  {
    name: 'Sahlab',
    price: 4.50,
    category: 'hot-drinks',
    image: 'images/sahlab.jpeg',
    ingredients: 'our special sahlab mix, water,special spices'
  },

  {
    name: 'Hot Chocolate',
    price: 6.50,
    category: 'hot-drinks',
    image: 'images/hotchoclate.jpeg',
    ingredients: 'cacoa powder, belgian chocolate mix, whole milk,splash of vanilla extract, topped with :marshmallows, chopped chocolate,spice blend'
  },

  {
    name: 'Black Tea',
    price: 3.50,
    category: 'hot-drinks',
    image: 'images/blacktea.jpeg',
    ingredients: 'ceylon tea, water'
  },

  {
    name: 'Croissant',
    price: 3.75,
    category: 'pastry',
    image: 'images/croissant.jpeg',
    ingredients: 'Butter, flour, sugar, yeast'
  },
  {
    name: 'Blueberry Muffin',
    price: 4.00,
    category: 'pastry',
    image: 'images/blueberry-muffins2.jpeg',
    ingredients: 'Blueberries, flour, eggs, sugar'
  },

  {
    name: 'Chef s special cheesecake',
    price: 7.50,
    category: 'pastry',
    image: 'images/cheescake.jpeg',
    ingredients: 'cream cheese, eggs, sugar,fresh cherries,coated with chocolate'
  }
,

  {
    name: 'Blueberry Muffin',
    price: 4.00,
    category: 'pastry',
    image: 'images/brownie.jpeg',
    ingredients: 'flour, eggs, sugar,butter ,chocolate chips,cacoa powder,vanilla,dash of salt'
  },

];


function createProductCards() {
  const categoryContainers = {
    'cold-drinks': document.getElementById('cold-drinks-cards'),
    'hot-drinks': document.getElementById('hot-drinks-cards'),
    'pastry': document.getElementById('pastry-cards')
  };

  products.forEach(product => {
    
    const card = document.createElement('div');
    card.className = 'card';
    
    
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-face card-front">
          <img src="${product.image}" alt="${product.name}">
          <div class="card-content">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart('${product.name}', ${product.price})">Add to Cart</button>
          </div>
        </div>
        <div class="card-face card-back">
          <h3>${product.name}</h3>
          <p>Ingredients:</p>
          <p>${product.ingredients}</p>
        </div>
      </div>
    `;

    
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

   
    if (categoryContainers[product.category]) {
      categoryContainers[product.category].appendChild(card);
    }
  });
}


createProductCards();

  initMenu();
updateCart();