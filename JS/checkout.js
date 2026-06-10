const items = document.querySelectorAll(".checkout-item");

function updateTotal() {

    let total = 0;

    document.querySelectorAll(".checkout-item").forEach(item => {

        const price = parseFloat(item.dataset.price);

        const quantity = parseInt(
            item.querySelector(".quantity").textContent
        );

        total += price * quantity;

    });

    document.getElementById("totalPrice").textContent =
        total.toFixed(2);
}

items.forEach(item => {

    const plus = item.querySelector(".plus");

    const minus = item.querySelector(".minus");

    const quantityElement = item.querySelector(".quantity");

    const deleteButton = item.querySelector(".delete-btn");

    plus.addEventListener("click", () => {

        let quantity = parseInt(quantityElement.textContent);

        quantity++;

        quantityElement.textContent = quantity;

        updateTotal();

    });

    minus.addEventListener("click", () => {

        let quantity = parseInt(quantityElement.textContent);

        if (quantity > 1) {

            quantity--;

            quantityElement.textContent = quantity;

            updateTotal();
        }

    });

    deleteButton.addEventListener("click", () => {

        item.remove();

        updateTotal();

    });

});

document.querySelector(".add-more-btn").addEventListener("click", () => {

    window.location.href = "menu.html";

});

document.querySelector(".checkout-btn").addEventListener("click", () => {

    window.location.href = "terminal.html";

});

updateTotal();
