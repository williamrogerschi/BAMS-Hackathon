//query to get the html element

document.getElementById("BUTTON-ID").addEventListener("click", () => {
  const itemName = prompt("Enter the name of the item to add:");
  if (itemName) {
    addToCart(itemName);
  }
});
