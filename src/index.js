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

const TRUSTEES = [
    {name: "TrustGod Oguchiugbo", image: "assets/images/trustees/trustGod.jpeg", role: "Chief Executive Officer"},
    {name: "Joshua Emmanuel", image: "assets/images/trustees/joshua.jpeg", role: "Chief Technology Officer"},
    {name: "Alexander Bello Olajide", image: "assets/images/trustees/alex.jpeg", role: "Chief Security Officer"},
    {name: "Testimony Faleye", image: "assets/images/trustees/testimony.jpeg", role: "Sales Director"},
    {name: "Babatunde Ibrahim Alawiye", image: "assets/images/trustees/babatunde.jpeg", role: "Chief Compliance Officer"},
];

const displayProductDetails = (product) => {
    const modal = document.querySelector(".modal-overlay");
    modal.classList.add("open");

    const closeModalButton = document.querySelector(".modal-close");
    closeModalButton.addEventListener("click", function() {
        modal.classList.remove("open");
    });

    const imageWrapper = document.querySelector("#modalImg");
    imageWrapper.style.backgroundImage = `url(${product.image})`;
    imageWrapper.style.backgroundPosition = "center center";
    imageWrapper.style.backgroundSize = "cover";

    document.querySelector('#modalCat').textContent = product.category;
    document.querySelector('#modalName').textContent = product.name;
    document.querySelector('#modalPrice').textContent = product.price.toFixed(2);
    document.querySelector('#modalDesc').textContent = product.description;
}

const displayProducts = (
    containerClass,
    products,
) => {
    const productsGrid = document.querySelector(containerClass);
    if (!productsGrid) {
        return;
    }

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
        detailsButton.textContent = 'View Details';
        detailsButton.dataset.id = product.id;

        detailsButton.addEventListener("click", (e) => {
            const productId = e.target.dataset.id;
            const productDetails = PRODUCTS.find((product) => product.id == productId);

            if (!productDetails) {
                return;
            }
            displayProductDetails(productDetails);
        })

        productFooter.appendChild(detailsButton);


        productCard.append(imageCard);
        productCard.appendChild(productBody);
        productCard.appendChild(productFooter);

        productsGrid.appendChild(productCard);
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
    if (!marqueeBarElement) {
        return;
    }

    const formattedItems = items.map((item) => {
        return `<span class="sep">|</span> ${item}`;
    });

    marqueeBarElement.innerHTML = formattedItems.join(" ");
}

const displayTrustees = () => {
    const trusteeGrid = document.querySelector(".trustees-grid");
    if (!trusteeGrid) {
        return;
    }

    for (let trustee of TRUSTEES) {
        const trusteeCard = document.createElement("div");
        trusteeCard.classList.add("trustee-card", "reveal");

        const trusteePhotoWrapper = document.createElement("div");
        trusteePhotoWrapper.classList.add("trustee-photo");
        trusteePhotoWrapper.style.backgroundImage = `url(${trustee.image})`;
        trusteePhotoWrapper.style.backgroundPosition = "center";
        trusteePhotoWrapper.style.backgroundSize = "cover";


        const trusteeInfo = document.createElement("div");
        trusteeInfo.classList.add("trustee-info");
        trusteeInfo.innerHTML = `
            <h3 class="trustee-name">${trustee.name}</h3>
            <p class="trustee-role">${trustee.role}</p>
        `;
        trusteeCard.appendChild(trusteePhotoWrapper);
        trusteeCard.appendChild(trusteeInfo);

        trusteeGrid.appendChild(trusteeCard);
    }
}

displayMarqueeItems();
const featuredProducts = PRODUCTS.filter(product => product.isFeatured);
displayProducts('.featured-products', featuredProducts);

displayProducts(
    '.product-list',
    PRODUCTS
);

displayTrustees();

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const firstNameField = document.getElementById("firstName");
        const lastNameField = document.getElementById("lastName");
        const emailField = document.getElementById("email");
        const phoneField = document.getElementById("phone");
        const subjectField = document.getElementById("subject");
        const dateTimeField = document.getElementById("dateTime");
        const messageField = document.getElementById("message");

        // values
        const firstName = firstNameField.value;
        const lastName = lastNameField.value;
        const email = emailField.value;
        const phone = phoneField.value;
        const subject = subjectField.value;
        const dateTime = dateTimeField.value;
        const message = messageField.value;

        const infoElement = document.getElementById("info");
        infoElement.textContent = "";

        const validateForm = () => {
            const errorFields = document.querySelectorAll('.field-error');

            for (let i = 0; i < errorFields.length; i++) {
                errorFields[i].innerHTML = '';
            }

            const errors = {};
            if (!firstName || firstName.trim().length === 0) {
                errors["firstName"] = "First name is required";
            } else if (firstName.trim().length < 3) {
                errors["firstName"] = "First name must be at least 3 characters.";
            } else if (firstName.trim().length > 124) {
                errors['firstName'] = "First name must not exceed 124 characters.";
            }

            if (!lastName || lastName.trim().length === 0) {
                errors["lastName"] = "Last name is required";
            } else if (lastName.trim().length < 3) {
                errors["lastName"] = "Last name must be at least 3 characters.";
            } else if (lastName.trim().length > 124) {
                errors['lastName'] = "Last name must not exceed 124 characters.";
            }

            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!email || email.trim().length === 0) {
                errors["email"] = "Email is required";
            } else if (email.trim().length > 255) {
                errors["email"] = "Email must not exceed 255 characters.";
            } else if (!emailPattern.test(email.trim())) {
                errors["email"] = "The provided email is invalid.";
            }

            const mobilePhoneNumberPattern = /^(?:\+234|0)(7|2|5|8|9)(0|1)\d{8}$/;

            if (!phone || phone.trim().length === 0) {
                errors["phone"] = "Phone number is required";
            } else if (!mobilePhoneNumberPattern.test(phone.trim())) {
                errors["phone"] = "The provided phone number is invalid.";
            }

            const allowedSubjects = [
                "inquiry",
                "bespoke",
                "appointment",
                "bridal",
                "wholesale",
                "press",
                "other",
            ];

            if (!subject || subject.trim().length === 0) {
                errors["subject"] = "Subject is required";
            } else if (!allowedSubjects.includes(subject.trim())) {
                errors["subject"] = "The selected subject is invalid.";
            }

            if (subject.trim() === 'appointment') {
                if (!dateTime || dateTime.trim().length === 0) {
                    errors['dateTime'] = "The date/time field is required.";
                } else {
                    const parsedDate =  new Date(dateTime);
                    if (isNaN(parsedDate)) {
                        errors["dateTime"] = "The date format is invalid.";
                    } else if (new Date() >= parsedDate) {
                        errors["dateTime"] = "Kindly provided a future date/time.";
                    }
                }
            }


            if (!message || message.trim().length === 0) {
                errors["message"] = "Message is required";
            } else if (message.trim().length > 500) {
                errors["message"] = "Message must not exceed 500 characters.";
            }

            if (Object.values(errors).length > 0) {
                for(error in errors) {
                    const errorId = `${error}Err`;
                    let errorElement = document.getElementById(errorId);

                    errorElement.innerHTML = errors[error];
                    errorElement.classList.add("show");
                }
                return false;
            }

            return true;
        }

        if (!validateForm()) {
            return;
        }

        infoElement.style.color = "green";
        infoElement.style.padding = "10px";
        infoElement.textContent = `Thanks ${firstName}, your appointment has been scheduled successfully.`;

        contactForm.reset();
        window.scrollTo({
            top: 400,
            behavior: "smooth",
        });
    })
}

const toggleMobileMenu = () => {
    if (window.innerWidth >= 768) {
        return;
    }

    const mobileMenu = document.querySelector('.nav-links');

    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    }else {
        mobileMenu.style.display = "flex";
    }
}

const menuToggleButton = document.querySelector('.nav-toggle');

menuToggleButton.addEventListener('click', () => {
    toggleMobileMenu();
});

window.addEventListener('resize', () => {
    document.querySelector('.nav-links').style.display = "none";
});