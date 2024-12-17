// Array inicial de bebidas con URLs reales
const products  = [
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

// Variables de DOM
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const totalPriceElem = document.getElementById("totalPrice");
const checkoutBtn = document.getElementById("checkoutBtn");
const productContainer = document.getElementById("productos");

// Array que almacenará los productos del carrito
let cart = [];

// Función para renderizar los productos en el DOM
function renderProducts() {
    productContainer.innerHTML = ''; // Limpiar el contenedor de productos
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('producto');
        
        productDiv.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}">
            <h3>${product.nombre}</h3>
            <p>$${product.precio.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}" data-name="${product.nombre}" data-price="${product.precio}">Agregar al carrito</button>
        `;
        
        productContainer.appendChild(productDiv);
    });
}

// Función para agregar productos al carrito
function addToCart(productId, productName, productPrice) {
    const product = { id: productId, nombre: productName, precio: productPrice };
    cart.push(product);
    updateCartCount();
}

// Función para actualizar el número de productos en el carrito
function updateCartCount() {
    cartCount.innerText = cart.length;
}

// Función para mostrar el carrito en el modal
function displayCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPriceElem.innerText = total.toFixed(2);
}

// Evento para mostrar el carrito al hacer clic en el icono del carrito
cartBtn.addEventListener('click', () => {
    displayCart();
    cartModal.style.display = 'flex';
});

// Evento para cerrar el modal del carrito
closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Evento para proceder al pago
checkoutBtn.addEventListener('click', () => {
    alert("¡Gracias por tu compra!");
    cart = []; // Vaciar el carrito
    updateCartCount();
    cartModal.style.display = 'none';
});

// Evento para agregar productos al carrito al hacer clic en el botón "Agregar al carrito"
document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('add-to-cart')) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        const productName = e.target.getAttribute('data-name');
        const productPrice = parseFloat(e.target.getAttribute('data-price'));
        addToCart(productId, productName, productPrice);
    }
});

// Inicializamos la vista de productos
renderProducts();