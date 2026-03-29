const PRODUCTS = [
    { id: 1, name: "Marigold Female High Class Trouser", price: 48000, tag: "bestseller",
        isFeatured: true, category: "Trousers", image: "assets/images/products/classy-pants.jpg", description: "",
    },
    { id: 2, name: "Soothing Cover-All Whine Hat", price: 12000, tag: "hats",
        isFeatured: true, category: "Accessories", image: "assets/images/products/exquisite-hat.jpg", description: "",
    },
    { id: 3, name: "Portal Female Bag", price: 20000, tag: "Accessories",
        isFeatured: false, category: "Bags", image: "assets/images/products/female-bag.jpg", description: "",
    },
    { id: 4, name: "Fluffy Unisex Hoodie", price: 33000, tag: "Hoodies",
        isFeatured: false, category: "Shirts", image: "assets/images/products/fluffy-hoodie.jpg", description: "",
    },
    { id: 5, name: "Marigold Female High Class Trouser", price: 50000, tag: "bestseller",
        isFeatured: false, category: "Trousers", image: "assets/images/products/classy-pants.jpg", description: "",
    },
    { id: 6, name: "White Full Cover Gown for Women", price: 65000, tag: "bestseller",
        isFeatured: true, category: "Gowns", image: "assets/images/products/gown.jpg", description: "",
    },
    { id: 7, name: "Marigold Female High Class Trouser", price: 29000, tag: "bestseller",
        isFeatured: false, category: "Trousers", image: "assets/images/products/classy-pants.jpg", description: "",
    },
    { id: 8, name: "2-in-1 Female Bag", price: 38000, tag: "Accessories",
        isFeatured: false, category: "Bags", image: "assets/images/products/female-bag.jpg", description: "",
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

const featuredProducts = PRODUCTS.filter(product => product.isFeatured);
displayProducts('.products-grid', featuredProducts);