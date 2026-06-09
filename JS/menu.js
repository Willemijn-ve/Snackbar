document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".add-button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Item added to order 🍔");
        });
    });

});