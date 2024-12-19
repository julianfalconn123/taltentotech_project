const products = [
      {
          id: 1,
          nombre: "Coca-Cola",
          precio: 1.5,
          descripcion: "Refresco de cola más famoso del mundo.",
          imagen: "https://th.bing.com/th/id/OIP.Bf92l7JE05C9HZGWcddloQHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain",
      },
      {
          id: 2,
          nombre: "Pepsi",
          precio: 1.4,
          descripcion: "Refresco de cola con un sabor refrescante.",
          imagen: "https://th.bing.com/th/id/R.9a4b457e59448e5693ac7012e15918a2?rik=DqBwhiUl9jWBUQ&pid=ImgRaw&r=0",
      },
      {
          id: 3,
          nombre: "Fanta",
          precio: 1.3,
          descripcion: "Refresco sabor a naranja, ideal para cualquier momento.",
          imagen: "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750105530377L.jpg",
      },
      {
          id: 4,
          nombre: "Sprite",
          precio: 1.2,
          descripcion: "Refresco sin cafeína con un toque cítrico.",
          imagen: "https://img.e-spar.pl/brandbank/961981",
      },
      {
          id: 5,
          nombre: "Red Bull",
          precio: 2.3,
          descripcion: "Bebida energética reconocida mundialmente.",
          imagen: "https://th.bing.com/th/id/OIP.bPPwqY6bEtl7k4Cs9vkzYAHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
      },
      {
          id: 6,
          nombre: "Monster Energy",
          precio: 2.5,
          descripcion: "Bebida energética para potenciar tu energía.",
          imagen: "https://i5.walmartimages.com/seo/Monster-Energy-Ultra-Rosa-Sugar-Free-Energy-Drink-16-fl-oz_f8a7440c-cc00-4879-854d-9ad1f083103b.9b0c18dda31a5c992eac098d449cb3bf.png",
      },
      {
          id: 7,
          nombre: "Manaos",
          precio: 1.0,
          descripcion: "Refresco económico con variedad de sabores.",
          imagen: "https://jumboargentina.vtexassets.com/arquivos/ids/209654/Manaos-Naranja-Manaos-Naranja-225-L-1-46056.jpg?v=636383729320530000",
      },
      {
          id: 8,
          nombre: "Powerade",
          precio: 1.9,
          descripcion: "Bebida deportiva para recuperar la hidratación.",
          imagen: "https://www.coca-cola.com/content/dam/onexp/bo/es/brands/powerade/new/powerade-multifruta.jpg",
      },
      {
          id: 9,
          nombre: "Gatorade",
          precio: 1.8,
          descripcion: "Bebida isotónica para deportistas.",
          imagen: "https://th.bing.com/th/id/R.1b502df0671efd83f37896080ee24a91?rik=3rrN63w1o9AY4w&pid=ImgRaw&r=0",
      },
      {
          id: 10,
          nombre: "Aquafina",
          precio: 1.0,
          descripcion: "Agua purificada de alta calidad.",
          imagen: "https://th.bing.com/th/id/OIP.MHfgdmllgsNWf7I5fQd6NgHaHa?rs=1&pid=ImgDetMain",
      },
  ];


  // Variables
  let cart = []; // Array para almacenar los productos en el carrito
  const cartDropdown = document.getElementById('cartDropdown');
  const cartItems = document.getElementById('cartItems');
  const totalPrice = document.getElementById('totalPrice');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const productsContainer = document.getElementById('productos');
  
  // Función para mostrar productos dinámicamente
// Función para mostrar productos dinámicamente
function displayProducts() {
  productsContainer.innerHTML = ''; // Limpiar productos anteriores

  products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('producto');
      productDiv.innerHTML = `
          <img src="${product.imagen}" alt="${product.nombre}">
          <h3>${product.nombre}</h3>
          <p class="descripcion">${product.descripcion}</p> <!-- Descripción inicialmente oculta -->
          <p>Precio: $${product.precio}</p>
          <button class="add-to-cart" data-id="${product.id}" data-name="${product.nombre}" data-price="${product.precio}">Agregar al carrito</button>
          <button class="ver-mas-btn">Ver más</button> <!-- Botón de "Ver más" -->
      `;
      productsContainer.appendChild(productDiv);

      // Obtener el botón "Ver más" y la descripción
      const verMasBtn = productDiv.querySelector('.ver-mas-btn');
      const descripcion = productDiv.querySelector('.descripcion');

      // Añadir el evento para alternar la visibilidad de la descripción
      verMasBtn.addEventListener('click', () => {
          descripcion.style.display = descripcion.style.display === 'none' || descripcion.style.display === '' ? 'block' : 'none';
          // Cambiar el texto del botón según el estado
          verMasBtn.textContent = descripcion.style.display === 'block' ? 'Ver menos' : 'Ver más';
      });
  });
}
  
  // Función para agregar un producto al carrito
  function addProductToCart(id, name, price) {
      const product = { id, name, price };
      cart.push(product);
      updateCart();
  }
  
  // Función para eliminar un producto del carrito
  function removeProduct(index) {
      cart.splice(index, 1);
      updateCart();
  }
  
  // Función para actualizar el carrito visualmente
  function updateCart() {
      cartItems.innerHTML = ''; // Limpiar los items existentes en el carrito
      let total = 0;
  
      cart.forEach((product, index) => {
          const li = document.createElement('li');
          li.innerHTML = `${product.name} - $${product.price} <button onclick="removeProduct(${index})">Eliminar</button>`;
          cartItems.appendChild(li);
          total += product.price;
      });
  
      totalPrice.textContent = total.toFixed(2);
  }
  
  // Función para mostrar u ocultar el carrito desplegable
  document.querySelector('.cart').addEventListener('click', () => {
      // Asegúrate de que el carrito se muestre y oculte correctamente
      if (cartDropdown.style.display === 'none' || cartDropdown.style.display === '') {
          cartDropdown.style.display = 'block'; // Muestra el carrito
      } else {
          cartDropdown.style.display = 'none'; // Oculta el carrito
      }
  });
  
  // Función de procedimiento de pago (simulada)
  checkoutBtn.addEventListener('click', () => {
      if (cart.length > 0) {
          alert('Procediendo al pago...');
          cart = []; // Limpiar el carrito después del pago
          updateCart();
      } else {
          alert('El carrito está vacío.');
      }
  });
  
  // Event listener para los botones "Agregar al carrito"
  productsContainer.addEventListener('click', (event) => {
      if (event.target && event.target.classList.contains('add-to-cart')) {
          const id = event.target.getAttribute('data-id');
          const name = event.target.getAttribute('data-name');
          const price = parseFloat(event.target.getAttribute('data-price'));
  
          addProductToCart(id, name, price);
      }
  });
  
  // Mostrar los productos cuando la página cargue
  displayProducts();