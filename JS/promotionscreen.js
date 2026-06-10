let cartCount = Number(localStorage.getItem("cartCount")) || 0;

document.getElementById("cartCount").textContent = cartCount;

const promoButtons = document.querySelectorAll(".promo-button");

promoButtons.forEach(button => {

    button.addEventListener("click", function () {

        cartCount++;

        localStorage.setItem("cartCount", cartCount);

        document.getElementById("cartCount").textContent = cartCount;

    });

});

document.getElementById("continueButton").addEventListener("click", function () {

    window.location.href = "menu.html";

});

document.getElementById("cartButton").addEventListener("click", function () {

    window.location.href = "checkout.html";

});