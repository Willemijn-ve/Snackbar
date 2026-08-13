let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCounter = document.getElementById("cartCount");
const addButtons = document.querySelectorAll(".add-button");


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


addButtons.forEach(button => {

    button.addEventListener("click", function () {

        const card = button.closest(".menu-card");

        const image = card.querySelector(".menu-image");

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


document.getElementById("checkoutButton").addEventListener("click", function () {

    window.location.href = "checkout.html";

});


document.getElementById("cartButton").addEventListener("click", function () {

    window.location.href = "checkout.html";

});


updateCartCounter();