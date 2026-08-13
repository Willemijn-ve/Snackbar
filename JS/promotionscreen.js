let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCounter = document.getElementById("cartCount");
const promoButtons = document.querySelectorAll(".promo-button");

function updateCartCounter() {
    const totalItems = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    cartCounter.textContent = totalItems;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCounter();
}

promoButtons.forEach(button => {

    button.addEventListener("click", function () {

        const card = button.closest(".promotion-card");

        const image = card.querySelector("img");

        const product = {
            name: card.dataset.name,
            price: Number(card.dataset.price),
            image: image.getAttribute("src"),
            quantity: 1
        };

        const existingProduct = cart.find(item => {
            return item.name === product.name;
        });

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push(product);
        }

        saveCart();

        button.textContent = "Added";

        setTimeout(() => {
            button.textContent = "Add to Order";
        }, 1000);
    });
});

document.getElementById("continueButton").addEventListener("click", function () {
    window.location.href = "menu.html";
});

document.getElementById("cartButton").addEventListener("click", function () {
    window.location.href = "checkout.html";
});

updateCartCounter();