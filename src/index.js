const PRODUCTS = [
    { id: 1, name: "Marigold Female High Class Trouser", price: 48000, tag: "bestseller",
        isFeatured: true, category: "Trousers", image: "assets/images/products/classy-pants.jpg",
        description: "Elegant high-waist trousers tailored for a sleek, polished look. Designed with premium fabric for comfort and durability, perfect for office wear or upscale outings.",
    },
    { id: 2, name: "Soothing Cover-All Whine Hat", price: 12000, tag: "hats",
        isFeatured: true, category: "Accessories", image: "assets/images/products/exquisite-hat.jpg",
        description: "Stylish wide-brim hat that offers full coverage and a touch of elegance. Lightweight and breathable, ideal for sunny days, events, or elevating casual outfits.",
    },
    { id: 3, name: "Portal Female Bag", price: 20000, tag: "Accessories",
        isFeatured: false, category: "Bags", image: "assets/images/products/female-bag.jpg",
        description: "Chic and versatile handbag designed for everyday use. Features spacious compartments to keep essentials organized while maintaining a modern, fashionable look.",
    },
    { id: 4, name: "Fluffy Unisex Hoodie", price: 33000, tag: "Hoodies",
        isFeatured: false, category: "Shirts", image: "assets/images/products/fluffy-hoodie.jpg",
        description: "Soft, cozy hoodie made with plush fabric for all-day comfort. Unisex design with a relaxed fit, perfect for casual wear, layering, or staying warm in style.",
    },
    { id: 5, name: "High Quality Green Fur Gown", price: 50000, tag: "bestseller",
        isFeatured: false, category: "Gowns", image: "assets/images/products/fur-gown.png",
        description: "Luxurious green fur gown crafted for standout elegance. Features a rich texture and flattering silhouette, ideal for special occasions and evening events.",
    },
    { id: 6, name: "White Full Cover Gown for Women", price: 65000, tag: "bestseller",
        isFeatured: true, category: "Gowns", image: "assets/images/products/gown.jpg",
        description: "Graceful full-length gown with modest coverage and timeless appeal. Designed with fine detailing and smooth fabric, perfect for formal events and celebrations.",
    },
    { id: 7, name: "Nike Unisex Sneaker", price: 29000, tag: "Nike",
        isFeatured: false, category: "Shoes", image: "assets/images/products/nike-sneakers.jpg",
        description: "Durable and stylish Nike sneakers built for comfort and performance. Lightweight design with cushioned support, ideal for daily wear, sports, or casual outfits.",
    },
    { id: 8, name: "2-in-1 Female Bag", price: 38000, tag: "Accessories",
        isFeatured: false, category: "Bags", image: "assets/images/products/female-bags.jpg",
        description: "Versatile 2-in-1 bag that transforms for different styles and needs. Offers ample storage with a sleek design, perfect for work, travel, or everyday fashion.",
    },
    { id: 9, name: "Black Stain-Resistant Women Heels", price: 38000, tag: "Accessories",
        isFeatured: false, category: "Bags", image: "assets/images/products/heels.jpg",
        description: "Elegant black heels crafted with stain-resistant material for lasting wear. Designed for comfort and confidence, perfect for formal events or stylish daily use.",
    },
];

const displayProducts = (
    containerClass,
    products,
) => {
    const productsGrid = document.querySelector(containerClass);

    for (let product of products) {
        const productCard = document.createElement("article");
        productCard.classList.add("product-card", "reveal");
        productCard.setAttribute("data-category", product.category);

        const imageCard = document.createElement("div");
        imageCard.style.height = "200px";
        imageCard.classList.add("product-image-card");
        imageCard.style.backgroundImage = `url(${product.image})`;
        imageCard.style.backgroundPosition = "center";
        imageCard.style.backgroundSize = "cover";

        const productTag = document.createElement("div");
        productTag.classList.add("product-tag");
        productTag.textContent = product.tag;
        imageCard.appendChild(productTag);

        const productBody = document.createElement("div");
        productBody.classList.add("product-body");
        productBody.innerHTML = `
            <p class="product-cat">${product.category}</p>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">₦${product.price.toFixed(2)}</p>
        `

        const productFooter = document.createElement("div");
        productFooter.classList.add("product-foot");

        const detailsButton = document.createElement("button");
        detailsButton.classList.add("btn", "btn-sm");
        detailsButton.textContent = 'View Details'
        productFooter.appendChild(detailsButton);

        productCard.append(imageCard);
        productCard.appendChild(productBody);
        productCard.appendChild(productFooter);

        if (productsGrid) {
            productsGrid.appendChild(productCard);
        }
    }
}

const displayMarqueeItems = () => {
    const items = [
        "Buy 1 get 2 ongoing",
        "Free shipping on orders above ₦50,000",
        "Pre-order to enjoy amazing discounts",
        "Become a Fashion Star with our Design Workshop",
    ];

    const marqueeBarElement = document.querySelector(".marquee-bar marquee");
    const formattedItems = items.map((item) => {
        return `<span class="sep">|</span> ${item}`;
    });

    if (marqueeBarElement) {
        marqueeBarElement.innerHTML = formattedItems.join(" ");
    }
}

displayMarqueeItems();
const featuredProducts = PRODUCTS.filter(product => product.isFeatured);
displayProducts('.featured-products', featuredProducts);

displayProducts(
    '.product-list',
    PRODUCTS
);