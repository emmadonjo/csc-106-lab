// 1. Navigation Scroll Effect (Sticky Nav color change)
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

// 2. Automated Product Loader (Loads unique images product-1.jpg through product-30.jpg)
const catalog = document.querySelector('.product-catalog');

if (catalog) {
    // This loop runs exactly 30 times
    for (let i = 1; i <= 30; i++) {
        const card = document.createElement('div');
        card.className = 'item-card';
        
        // This generates the HTML for each card using the current number (i)
        card.innerHTML = `
            <img src="product-${i}.jpg" alt="Aura Mode Piece ${i}">
            <div class="item-meta">
                <span>AURA ARCHIVE NO. ${i}</span>
                <span>$850</span>
            </div>
        `;
        
        // This adds the newly created card into your 'product-catalog' div
        catalog.appendChild(card);
    }
    console.log("DOM Manipulation: 30 unique product images (1-30) successfully loaded.");
}

// 3. Form Handling (Appointments Page)
const apptForm = document.getElementById('appointmentForm');
if (apptForm) {
    apptForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("AURA MODE: Your appointment request has been received. Our team will contact you shortly.");
        apptForm.reset();
    });
}

// 4. Requirement: Show DOM Structure in Console
console.log("--- AURA MODE DOM STRUCTURE ---");
console.dir(document.documentElement);
