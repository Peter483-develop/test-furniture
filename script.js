// Product data organized by category
const categorizedProducts = {
    'sofas': [
        { id: 1, name: "Simple Wooden Sofa", price: 97500, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757498042/simple_wooden_sofa_fsczbh.jpg", description: "A classic and comfortable wooden sofa, perfect for any living room.", room: "living-room" },
    
        
    ],
    'chairs': [
        { id: 2, name: "outdoor Wooden Chair", price: 19500, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756725668/brown-wooden-furniture_ib9con.jpg", description: "Handcrafted from durable wood, this chair is ideal for outdoor use.", room: "outdoor" },
        { id: 4, name: "Dining Chairs", price: 19500, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757142474/dininng_chair_v7aeuh.jpg", description: "A stylish dining chair with a comfortable cushioned seat.", room: "dining-room" },
        { id: 16, name: "Patio Dining Chair", price: 15000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757488367/Patio-Dining-Chair-Set-of-2-with-Metal-and-Acacia-Wood-Frame_vorkkk.webp", description: "Weather-resistant chair, ideal for outdoor dining and relaxing on the patio.", room: "outdoor" },
        {id: 11, name: "Classy Dining Chairs", price: 25000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757142474/chair5_w72ods.jpg", description: "A set of elegant dining chairs with a modern design.", room: "dining-room" },
    ],
    'tables': [
        { id: 3, name: "6 seater dining table", price: 26000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757142474/dining_set_wzflp9.jpg", description: "This is a specially crafted ^ seate Dining table Perfect for your home.", room: "dining-room" },
        { id: 5, name: "Dining Table Set", price: 117000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756730877/dining_table_set_zrsuxb.jpg", description: "A complete dining set with a sturdy table and matching chairs.", room: "dining-room" },
        { id: 7, name: "Bedside Table", price: 10400, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757488186/bedside_table_2_tsunji.webp", description: "A sleek and functional bedside table with storage.", room: "bedroom" },
        { id: 17, name: "Coffee Table", price: 22000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757446482/square_coffee_table_ka9vrw.jpg", description: "Stylish and modern coffee table, the centerpiece of your living room.", room: "living-room" },
        {id: 20, name: "Specious Mahogany Dining Table", price: 250000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756808744/mahogany_dining_table_c6uyxi.jpg", description: "A large mahogany dining table that can comfortably seat 8-10 people.", room: "dining-room" },
        {id: 21, name: "Strong 6 seater Mahogany Dining Table", price: 180000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1756808738/mahogany_dining_table_2_pww6zz.webp", description: "A sturdy mahogany dining table that can comfortably seat 6 people.", room: "dining-room" },
        {id: 22, name: "Mahogany Coffee Table", price: 45000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757445077/Classic-mahogany-coffee-table_wpnwvs.webp", description: "A beautifully crafted mahogany coffee table to enhance your living room decor.", room: "living-room" },
        {id: 25, name: "Patio Dining Table", price: 35000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757444859/patiofurniture_m37mdq.webp", description: "A durable patio dining table, perfect for outdoor meals and gatherings.", room: "outdoor" },
    ],
    'beds': [
        { id: 8, name: "Double Decker Bed", price: 78000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757013088/double_decker_beds_jr2nub.jpg", description: "A comfortable and spacious double decker bed for a good night's sleep.", room: "bedroom" },
        { id: 9, name: "Single Bed", price: 52000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757142474/bed2_mjhp8c.jpg", description: "A compact single bed, ideal for smaller rooms or guest spaces.", room: "bedroom" },
        { id: 18, name: "King Size Bed", price: 120000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757142474/bed3_nvftpx.jpg", description: "Luxurious king-size bed for maximum comfort and style.", room: "bedroom" },
        {id: 23, name: "wood and Metal Double Decker Bed", price: 95000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757013087/double_decker_beds1_hi3n16.jpg", description: "A sturdy double decker bed made from a combination of wood and metal.", room: "bedroom" },
        { id: 24, name: "Kristoff Solid Mahogany Wood Platform Bed", price: 150000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757497387/mahogany_bed._mlbiyc.jpg", description: "A solid mahogany wood platform bed that combines elegance and durability.", room: "bedroom" },
        {id: 26, name: "Timber Double Decker Bed", price: 85000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757013087/mahogany_double_decker_beds_sfqsvs.jpg", description: "A robust timber double decker bed, perfect for maximizing space in any bedroom.", room: "bedroom" },
        {id: 27, name: "Vermont Oak bed", price: 130000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757675628/Vermont_Oak_Bed_zkt76p.jpg", description: "A stylish oak bed that adds a touch of sophistication to your bedroom.", room: "bedroom" },
        {id: 28, name: "Wooden Single Bed", price: 60000, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757675593/Wooden_bed_frame_zmx6lq.webp", description: "A classic wooden single bed, perfect for any bedroom setting.", room: "bedroom" },
    ],
    'shelves': [
        { id: 10, name: "Bookshelf", price: 28600, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757449088/storage_display_oonroj.jpg", description: "A classic bookshelf with multiple tiers for all your books and decor.", room: "living-room" },
        
        { id: 12, name: "Corner Shelf", price: 15600, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757449088/storage_display_oonroj.jpg", description: "Space-saving corner shelf, perfect for displaying items in any room.", room: "living-room" },
        { id: 19, name: "Floating Shelves", price: 9500, image: "https://res.cloudinary.com/ddn5u79ju/image/upload/v1757449254/floating_shelves_csmfen.jpg", description: "Minimalist floating shelves to add a modern touch to your wall.", room: "living-room" },
    ]
};

// Combine all products into a single array
const products = Object.values(categorizedProducts).flat();

// Get DOM elements
const productContainer = document.getElementById('product-container');
const roomButtons = document.querySelectorAll('.filter-room-btn');
const categoryDropdown = document.getElementById('category-dropdown');
const searchInput = document.getElementById('search-input');
const loadMoreBtn = document.getElementById('load-more-btn');
const quickViewModal = document.getElementById('quick-view-modal');
const closeQuickViewBtn = document.getElementById('close-quick-view-btn');
const quickViewName = document.getElementById('quick-view-name');
const quickViewImage = document.getElementById('quick-view-image');
const quickViewPrice = document.getElementById('quick-view-price');
const quickViewDescription = document.getElementById('quick-view-description');
// NEW: Get the "Contact Us to Order" button
const contactToOrderBtn = document.getElementById('contact-to-order-btn'); 

let productsPerPage = 9;
let productsToShow = productsPerPage;

// Initial state for filters
const filterState = {
    room: 'all',
    category: 'all',
    search: ''
};

// Function to format price
const formatPrice = (price) => {
    return `KSh ${price.toLocaleString('en-KE')}`;
};

// Function to render products
const renderProducts = (filteredProducts, append = false) => {
    if (!append) {
        productContainer.innerHTML = '';
        productsToShow = productsPerPage;
    }

    const productsToDisplay = filteredProducts.slice(0, productsToShow);
    
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = "product-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full object-cover aspect-square">
            <div class="p-4">
                <h3 class="text-xl font-semibold text-gray-800">${product.name}</h3>
                <p class="text-gray-600 mt-1">${formatPrice(product.price)}</p>
                <div class="mt-4 flex justify-end items-center">
                    <button class="quick-view-btn bg-amber-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-amber-900 hover:border-2 hover:border-amber-800 transition-colors duration-300" data-id="${product.id}">
                        View Details
                    </button>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });

    if (filteredProducts.length > productsToShow) {
        loadMoreBtn.classList.remove('hidden');
    } else {
        loadMoreBtn.classList.add('hidden');
    }
};

// Function to filter and search products
const applyFiltersAndSearch = () => {
    let filtered = products;

    // Filter by room
    if (filterState.room !== 'all') {
        filtered = filtered.filter(p => p.room === filterState.room);
    }

    // Filter by category
    if (filterState.category !== 'all') {
        const categoryProducts = categorizedProducts[filterState.category] || [];
        const categoryIds = categoryProducts.map(p => p.id);
        filtered = filtered.filter(p => categoryIds.includes(p.id));
    }

    // Filter by search term
    if (filterState.search !== '') {
        const searchTerm = filterState.search.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
    }

    renderProducts(filtered);
};

// Function to render quick view modal
const renderQuickView = (product) => {
    quickViewName.textContent = product.name;
    quickViewImage.src = product.image;
    quickViewImage.alt = product.name;
    quickViewPrice.textContent = formatPrice(product.price);
    quickViewDescription.textContent = product.description;
};


// Initial render
applyFiltersAndSearch();

// Event listener for room filter buttons
roomButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        roomButtons.forEach(btn => {
            btn.classList.remove('bg-amber-800', 'text-white');
            btn.classList.add('bg-stone-200', 'text-gray-800');
        });
        e.target.classList.add('bg-amber-800', 'text-white');
        e.target.classList.remove('bg-stone-200', 'text-gray-800');
        filterState.room = e.target.dataset.room;
        applyFiltersAndSearch();
    });
});

// Event listener for category dropdown
categoryDropdown.addEventListener('change', (e) => {
    filterState.category = e.target.value;
    applyFiltersAndSearch();
});

// Event listener for the search input field
searchInput.addEventListener('input', (e) => {
    filterState.search = e.target.value;
    applyFiltersAndSearch();
});

// Event listener for Quick View button (using event delegation)
productContainer.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('quick-view-btn')) {
        const productId = parseInt(e.target.dataset.id);
        const product = products.find(p => p.id === productId);
        if (product) {
            renderQuickView(product);
            quickViewModal.classList.remove('hidden');
            quickViewModal.classList.add('flex');
        }
    }
});

// Event listeners for showing and hiding the quick view modal
closeQuickViewBtn.addEventListener('click', () => {
    quickViewModal.classList.add('hidden');
    quickViewModal.classList.remove('flex');
});

// NEW: Event listener for "Contact Us to Order" button
contactToOrderBtn.addEventListener('click', () => {
    // 1. Close the quick view modal
    quickViewModal.classList.add('hidden');
    quickViewModal.classList.remove('flex');

    // 2. Scroll to the contact section smoothly
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Event listener for the "Load More" button
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