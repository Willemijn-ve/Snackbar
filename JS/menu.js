let cartCount = Number(localStorage.getItem("cartCount")) || 0;

const cartCounter = document.getElementById("cartCount");

cartCounter.textContent = cartCount;

const addButtons = document.querySelectorAll(".add-button");

addButtons.forEach(button => {

    button.addEventListener("click", function () {

        cartCount++;

        cartCounter.textContent = cartCount;

        localStorage.setItem("cartCount", cartCount);

    });

});

document.getElementById("checkoutButton").addEventListener("click", function () {

    window.location.href = "checkout.html";

});

document.getElementById("cartButton").addEventListener("click", function () {

    window.location.href = "checkout.html";

});

document.querySelector(".checkout-btn").addEventListener("click", function () {
    window.location.href = "terminal.html";
});
