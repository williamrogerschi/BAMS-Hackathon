
// function addToCart(itemId) {
//   // Send a POST request to add the item to the shopping cart
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", `/cart/${itemId}`, true); //true - indicates that the request should be asynchronous, so it won't block the rest of your code.

//   //onreadystate calls the function every time the state of the request changes
//   xhr.onreadystatechange = function () {
//     //response 4=request complete
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         const item = document.getElementById(itemId);
//         const clonedItem = item.cloneNode(true); //cloning the item with the specified id
//         const htmlShoppingCart = document.getElementById("cart");
//         shoppingCart.push(clonedItem);
//         htmlShoppingCart.appendChild(clonedItem);
//         //htmlShoppingCart.innerHTML += shoppingCart[shoppingCart.length - 1];
//       } else if (xhr.status === 404) {
//         alert("Item not found");
//       } else {
//         alert("An error occurred");
//       }
//     }
//   };

//   xhr.send();
// }
