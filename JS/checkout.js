let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");


function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


function updateTotal() {

    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    totalPrice.textContent = total.toFixed(2);
}


function renderCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <h2>Your order is empty</h2>
                <p>Add a product to your order to continue.</p>
            </div>
        `;

        updateTotal();
        return;
    }


    cart.forEach((item, index) => {

        const checkoutItem = document.createElement("div");

        checkoutItem.classList.add("checkout-item");

        checkoutItem.innerHTML = `
            <img
                src="${item.image}"
                alt="${item.name}"
                class="checkout-image"
            >

            <div class="item-info">
                <h2>${item.name}</h2>
                <p>€${item.price.toFixed(2)}</p>
            </div>

            <div class="quantity-controls">

                <button
                    class="minus"
                    data-index="${index}"
                >
                    −
                </button>

                <span class="quantity">
                    ${item.quantity}
                </span>

                <button
                    class="plus"
                    data-index="${index}"
                >
                    +
                </button>

            </div>

            <button
                class="delete-btn"
                data-index="${index}"
            >
                ×
            </button>
        `;

        cartItems.appendChild(checkoutItem);

    });

    updateTotal();
}


cartItems.addEventListener("click", function(event) {

    const button = event.target;

    if (!button.dataset.index) {
        return;
    }

    const index = Number(button.dataset.index);


    if (button.classList.contains("plus")) {

        cart[index].quantity++;

    }


    if (button.classList.contains("minus")) {

        if (cart[index].quantity > 1) {

            cart[index].quantity--;

        }

    }


    if (button.classList.contains("delete-btn")) {

        cart.splice(index, 1);

    }


    saveCart();
    renderCart();

});


document
    .querySelector(".add-more-btn")
    .addEventListener("click", function() {

        window.location.href = "menu.html";

    });


document
    .querySelector(".checkout-btn")
    .addEventListener("click", function() {

        if (cart.length === 0) {

            alert("Please add a product before checking out.");
            return;

        }

        window.location.href = "terminal.html";

    });


renderCart();