
// Sample product data
const products = [
    { id: 1, name: "Product 1", price: "$25", image: "img/laptop1.jpg" },
    { id: 2, name: "Product 2", price: "$30", image: "img/laptop2.webp" },
    { id: 3, name: "Product 3", price: "$45", image: "img/laptop3.jpg" },
    { id: 4, name: "Product 4", price: "$40", image: "img/laptop4.jpg" },
    { id: 5, name: "Product 5", price: "$20", image: "img/laptop5.jpg" },
    { id: 6, name: "Product 6", price: "$35", image: "img/laptop6.jpg" },
];

const blogs = [
    { id: 1, title: "Blog Post 1", description: "This is a summary of blog post 1.", image: "img/lap1.jpg" },
    { id: 2, title: "Blog Post 2", description: "This is a summary of blog post 2.", image: "img/lap2.jpg" },
    { id: 3, title: "Blog Post 3", description: "This is a summary of blog post 3.", image: "img/lap3.jpeg" },
    { id: 4, title: "Blog Post 4", description: "This is a summary of blog post 4.", image: "img/lap4.webp" },
    { id: 5, title: "Blog Post 5", description: "This is a summary of blog post 5.", image: "img/lap5.jpg" },
    { id: 6, title: "Blog Post 6", description: "This is a summary of blog post 6.", image: "img/lap6.jpg" },
];

// Sample offers data
const offers = [
    { id: 1, title: "Offer 1", description: "Discount on offer 1.", image: "img/lapy1.webp" },
    { id: 2, title: "Offer 2", description: "Discount on offer 2.", image: "img/lapy2.jpg" },
    { id: 3, title: "Offer 3", description: "Discount on offer 3.", image: "img/lapy3.jpg" },
    { id: 4, title: "Offer 4", description: "Discount on offer 4.", image: "img/lapy4.jpg" },
    { id: 5, title: "Offer 5", description: "Discount on offer 5.", image: "img/lapy5.jpg" },
    { id: 6, title: "Offer 6", description: "Discount on offer 6.", image: "img/lapy6.webp" },
];

// Inject products into the HTML
const productList = document.getElementById('productList');
products.forEach(product => {
    const productCard = `
        <div class="col-md-4 col-sm-6 mb-4">
            <div class="card card-product h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    `;
    productList.innerHTML += productCard;
});

// Inject offers into the HTML
const offersList = document.getElementById('offersList');
offers.forEach(offer => {
    const offerCard = `
        <div class="col-md-4 col-sm-6 mb-4">
            <div class="card card-offer h-100">
                <img src="${offer.image}" class="card-img-top" alt="${offer.title}">
                <div class="card-body">
                    <h5 class="card-title">${offer.title}</h5>
                    <p class="card-text">${offer.description}</p>
                    <a href="#" class="btn btn-primary">See Offer</a>
                </div>
            </div>
        </div>
    `;
    offersList.innerHTML += offerCard;
});

// Inject blogs into the HTML
const blogList = document.getElementById('blogList');
blogs.forEach(blog => {
    const blogCard = `
        <div class="col-md-4 col-sm-6 mb-4">
            <div class="card card-blog h-100">
                <img src="${blog.image}" class="card-img-top" alt="${blog.title}">
                <div class="card-body">
                    <h5 class="card-title">${blog.title}</h5>
                    <p class="card-text">${blog.description}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    `;
    blogList.innerHTML += blogCard;
});

document.addEventListener('DOMContentLoaded', function () {
    // Sample review data
    const reviews = [
        {
            author: 'John Doe',
            text: 'This is an excellent product! I highly recommend it to everyone looking for quality and affordability.',
            date: 'September 15, 2024',
            rating: 5, 
            photo: 'img/men1.jpg' 
        },
        {
            author: 'Jane Smith',
            text: 'Great value for the price. The customer service was exceptional!',
            date: 'September 14, 2024',
            rating: 4,
            photo: 'img/men2.jpg'
        },
        {
            author: 'Alice Johnson',
            text: 'The quality is top-notch. I will definitely purchase again!',
            date: 'September 13, 2024',
            rating: 5,
            photo: 'img/men3.jpeg'
        }
        
    ];

    const reviewsList = document.getElementById('reviewsList');

    reviews.forEach(review => {
        
        const reviewCard = document.createElement('div');
        reviewCard.className = 'col-md-4';

       
        const stars = Array.from({ length: 5 }, (_, i) => 
            i < review.rating ? '★' : '☆'
        ).join(' ');

        reviewCard.innerHTML = `
            <div class="review-card">
                <img src="${review.photo}" alt="${review.author}'s photo">
                <div>
                    <div class="review-author">${review.author}</div>
                    <div class="stars">${stars}</div>
                    <div class="review-text">${review.text}</div>
                    <div class="review-date">${review.date}</div>
                </div>
            </div>
        `;

       
        reviewsList.appendChild(reviewCard);
    });
});
