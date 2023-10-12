//query to get the html element

const addToCartButtons = document.querySelectorAll(".add-to-cart"); //class of the buttons
//const cartItemsList = document.getElementById("cart-items");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const itemId = button.getAttribute("data-id"); //this needs to be the items id in the database--> each button needs the html id of the data's id
    addToCart(itemId);
  });
});

function addToCart(itemId) {
  // Send a POST request to add the item to the shopping cart
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `/cart/${itemId}`, true); //true - indicates that the request should be asynchronous, so it won't block the rest of your code.

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const item = document.getElementById(itemId);
        const clonedItem = item.cloneNode(true);
        cartItemsList.appendChild(clonedItem);
      } else if (xhr.status === 404) {
        alert("Item not found");
      } else {
        alert("An error occurred");
      }
    }
  };

  xhr.send();
}
