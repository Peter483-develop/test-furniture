// Product data organized by category
const categorizedProducts = {
    'sofas': [
        { id: 1, name: "Elegant Sofa", price: 97500, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756725667/3PCS-Living-Room-Furniture-Sets-Sectional-Sofa-for-Living-Room-Sofas_lwlaql.avif", description: "A classic and comfortable sofa, perfect for any living room.", room: "living-room" },
        { id: 6, name: "Lounge Sofa", price: 156000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756729404/lounge_sofa_nyh9ar.avif", description: "This spacious lounge sofa offers ultimate comfort and style.", room: "living-room" },
        { id: 13, name: "Outdoor Sofa Set", price: 130000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756800451/outdoor_sofa3_bopwgw.webp", description: "A durable and stylish outdoor sofa set, perfect for patios and gardens.", room: "outdoor" },
        { id: 14, name: "Modern Sectional Sofa", price: 175000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756800762/modernsectional_sofa1_x1gvej.jpg", description: "A sleek and modern sectional sofa that fits perfectly in contemporary living rooms.", room: "living-room" },
    ],
    'chairs': [
        { id: 2, name: "outdoor Wooden Chair", price: 19500, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756725668/brown-wooden-furniture_ib9con.jpg", description: "Handcrafted from durable wood, this chair is ideal for outdoor use.", room: "outdoor" },
        { id: 4, name: "Single Sofa Chair", price: 32500, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756730344/single_sofa_chair_jdzno4.jpg", description: "A stylish and comfortable single-seater sofa chair, perfect for a cozy corner.", room: "living-room" },
        { id: 15, name: "Velvet Accent Chair", price: 25000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756800938/velvetaccentchair_p5s16u.webp", description: "A luxurious velvet accent chair to add a touch of elegance to any room.", room: "living-room" },
    ],
    'tables': [
        { id: 3, name: "Lift top Coffee Table", price: 26000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756730515/lift_top_coffee_table_pi9aba.jpg", description: "This versatile coffee table features a lift-top design for a functional workspace.", room: "living-room" },
        { id: 5, name: "Dining Table Set", price: 117000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756730877/dining_table_set_zrsuxb.jpg", description: "A complete dining set with a sturdy table and matching chairs.", room: "dining-room" },
        { id: 7, name: "Bedside Table", price: 10400, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756731002/bedside_tqble_sgx1he.jpg", description: "A small and elegant table, perfect for your bedroom essentials.", room: "bedroom" },
        { id: 12, name: "Study Desk", price: 36400, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756731162/study_table_rgu7sc.jpg", description: "A simple and modern study desk, ideal for a productive workspace.", room: "bedroom" },
        {id: 16, name: "Mahogany Dining Table", price: 150000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756808744/mahogany_dining_table_c6uyxi.jpg", description: "A luxurious mahogany dining table that adds elegance to any dining room.", room: "dining-room" },
        {id: 17, name: "Mahogany Dining Table Set", price: 250000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756808738/mahogany_dining_table_2_pww6zz.webp", description: "A complete mahogany dining table set with matching chairs for a sophisticated dining experience.", room: "dining-room" },
        {id: 18, name: "Outdoor Dining Table Set", price: 180000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756808737/mahogany_dining_table_1_eszzzh.jpg", description: "A durable and stylish outdoor dining table set, perfect for alfresco dining.", room: "outdoor" },
    ],
    'beds': [
        { id: 8, name: "King-Size Bed", price: 195000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756731294/kingbed_oqpqmy.jpg", description: "Luxurious king-size bed for a restful night's sleep.", room: "bedroom" },
        {id: 19, name: "King-Size Bed with Storage", price: 220000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756809463/kingbed1_iapcv6.webp", description: "A king-size bed with built-in storage drawers to maximize space in your bedroom.", room: "bedroom" },
        {id: 20, name: "Queen-Size Bed", price: 180000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756809456/kingbed_vzcpeb.jpg", description: "A comfortable queen-size bed that fits perfectly in most bedrooms.", room: "bedroom" },
        {id: 21, name: "Modern Bed", price: 200000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756809453/modernbed_z0mgqh.webp", description: "A sleek and modern bed design that adds a contemporary touch to your bedroom.", room: "bedroom" },
    ],
    'storage': [
        { id: 9, name: "Wardrobe", price: 58500, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756731646/portable_wadrobe_ik5ujf.jpg", description: "A spacious and portable wardrobe for all your storage needs.", room: "bedroom" },
        { id: 11, name: "Bookshelf", price: 23400, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756731646/bookshelf_eve0co.webp", description: "A stylish bookshelf to organize your favorite books and decor.", room: "living-room" },
        {id: 22, name: "Modern Wardrobe", price: 75000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756843503/wadrobe1_ptnguf.jpg", description: "A sleek and modern wardrobe design that fits perfectly in contemporary bedrooms.", room: "bedroom" },
        {id: 23, name: "5 Door Wardrobe", price: 120000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756843667/wadrobe2_jqy9xv.jpg", description: "A spacious 5-door wardrobe with ample storage for your clothing and accessories.", room: "bedroom" },
    ],
    'media': [
        { id: 10, name: "TV Stand", price: 39000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756731651/tv_stand_ukegot.jpg", description: "A sleek TV stand with ample storage for your media devices.", room: "living-room" },
    ],
};

const products = Object.entries(categorizedProducts).flatMap(([category, items]) => {
    return items.map(item => ({ ...item, category }));
});

let cart = [];

// State management for filters and search
let filterState = {
    category: 'all',
    room: 'all',
    search: ''
};

const productsPerPage = 6;
let productsToShow = productsPerPage;

// DOM element references
const productContainer = document.getElementById('product-container');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartModal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const searchInput = document.getElementById('search-input');
const categoryDropdown = document.getElementById('category-dropdown');
const roomButtons = document.querySelectorAll('.filter-room-btn');
const loadMoreBtn = document.getElementById('load-more-btn');
const quickViewModal = document.getElementById('quick-view-modal');
const quickViewContent = document.getElementById('quick-view-content');
const closeQuickViewBtn = document.getElementById('close-quick-view-btn');


/**
 * Renders product cards to the page based on the given array.
 * @param {Array} productList - The array of products to display.
 * @param {boolean} append - If true, appends new products instead of replacing them.
 */
function renderProducts(productList, append = false) {
    if (!append) {
        productContainer.innerHTML = '';
    }

    if (productList.length === 0) {
        productContainer.innerHTML = '<p class="text-center text-gray-500 col-span-full">No products found matching your criteria.</p>';
        loadMoreBtn.classList.add('hidden');
        return;
    }

    const start = append ? productContainer.children.length : 0;
    const end = Math.min(productList.length, start + productsPerPage);
    const productsToRender = productList.slice(start, end);

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        // Add new class for hover effects
        productCard.className = 'product-card bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-md mb-4">
            <h3 class="text-xl font-semibold text-gray-800">${product.name}</h3>
            <p class="text-gray-600 mt-2">KSh ${product.price.toLocaleString()}</p>
            <button data-id="${product.id}" class="quick-view-btn mt-4 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-300 transition-colors duration-300 w-full transform hover:scale-105">Quick View</button>
            <button data-id="${product.id}" class="add-to-cart-btn mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300 w-full transform hover:scale-105">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });

    if (end < productList.length) {
        loadMoreBtn.classList.remove('hidden');
    } else {
        loadMoreBtn.classList.add('hidden');
    }
}

/**
 * Updates the shopping cart count displayed on the UI.
 */
function updateCartCount() {
    cartCount.innerText = cart.length;
}

/**
 * Renders the items inside the shopping cart modal.
 */
function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center text-gray-500">Your cart is empty.</p>';
        cartTotal.innerText = `KSh 0.00`;
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'flex justify-between items-center bg-gray-50 p-3 rounded-lg';
        cartItem.innerHTML = `
            <span class="font-semibold">${item.name}</span>
            <span>KSh ${item.price.toLocaleString()}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.innerText = `KSh ${total.toLocaleString()}`;
}

/**
 * Renders the content of the quick-view modal.
 * @param {object} product - The product object to display.
 */
function renderQuickView(product) {
    quickViewContent.innerHTML = `
        <div class="md:w-1/2">
            <img src="${product.image}" alt="${product.name}" class="w-full h-auto object-cover rounded-lg">
        </div>
        <div class="md:w-1/2">
            <h3 class="text-3xl font-bold text-gray-800 mb-2">${product.name}</h3>
            <p class="text-2xl text-gray-600 font-semibold mb-4">KSh ${product.price.toLocaleString()}</p>
            <p class="text-gray-700 mb-6">${product.description || 'No description available.'}</p>
            <button data-id="${product.id}" class="add-to-cart-btn bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105">Add to Cart</button>
        </div>
    `;
}

/**
 * Applies all active filters and the search query to the products array
 * and then renders the result.
 */
function applyFiltersAndSearch() {
    let filteredProducts = products;

    if (filterState.category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === filterState.category);
    }
    
    if (filterState.room !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.room === filterState.room);
    }

    if (filterState.search.length > 0) {
        const searchTerm = filterState.search.toLowerCase();
        filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
    }

    productsToShow = productsPerPage;
    renderProducts(filteredProducts, false);
}

applyFiltersAndSearch();

categoryDropdown.addEventListener('change', (e) => {
    filterState.category = e.target.value;
    applyFiltersAndSearch();
});

roomButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        roomButtons.forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
        e.target.classList.add('bg-blue-500', 'text-white');
        filterState.room = e.target.dataset.room;
        applyFiltersAndSearch();
    });
});

searchInput.addEventListener('input', (e) => {
    filterState.search = e.target.value;
    applyFiltersAndSearch();
});

productContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const productId = parseInt(e.target.dataset.id);
        const productToAdd = products.find(p => p.id === productId);

        if (productToAdd && !cart.some(p => p.id === productId)) {
            cart.push(productToAdd);
            updateCartCount();
            renderCart();
            alert(`${productToAdd.name} has been added to your cart!`);
        } else if (productToAdd) {
            alert(`${productToAdd.name} is already in your cart.`);
        }
    } else if (e.target.classList.contains('quick-view-btn')) {
        const productId = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === productId);
        if (product) {
            renderQuickView(product);
            quickViewModal.classList.remove('hidden');
            quickViewModal.classList.add('flex');
        }
    }
});

cartBtn.addEventListener('click', () => {
    cartModal.classList.remove('hidden');
    cartModal.classList.add('flex');
});

closeCartBtn.addEventListener('click', () => {
    cartModal.classList.add('hidden');
    cartModal.classList.remove('flex');
});

closeQuickViewBtn.addEventListener('click', () => {
    quickViewModal.classList.add('hidden');
    quickViewModal.classList.remove('flex');
});

loadMoreBtn.addEventListener('click', () => {
    productsToShow += productsPerPage;
    const currentProducts = products.filter(p => {
        const roomMatch = filterState.room === 'all' || p.room === filterState.room;
        const categoryMatch = filterState.category === 'all' || p.category === filterState.category;
        const searchMatch = filterState.search === '' || p.name.toLowerCase().includes(filterState.search.toLowerCase());
        return roomMatch && categoryMatch && searchMatch;
    });
    renderProducts(currentProducts, true);
});

// Initialize Swiper carousel
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});