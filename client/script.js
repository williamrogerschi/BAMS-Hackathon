const demoPic = document.querySelector(".grid-image");

// MAIN function for API calls


window.addEventListener('load', async (event) => {
    event.preventDefault()
        let demoAll = await axios.get(`http://localhost:3001/demos`)
        let demoBikes = demoAll.data
        let gridHTML = document.getElementById("demo-bikes-container")
        console.log(demoBikes)
            for(let i = 0; i < demoBikes.length; i++) {
                gridHTML.innerHTML += `<a class="grid-item" id="box${i}" href="${demoBikes[i].url}">` //also added it up here - we can see once the button actually functions if it will let us click both while the whole a div is a link.

                let gridItem = document.querySelector(`#box${i}`)

                let htmlString = new String()
                

                htmlString += `<img class="grid-image" src="${demoBikes[i].imageUrl}">\n` //possibly can add the link to the ex site in the image?
                htmlString += `<div class="grid-brand">${demoBikes[i].brand}</div>\n`
                htmlString += `<div class="grid-model">${demoBikes[i].model}</div>\n`
                htmlString += `<div class="grid-price">${demoBikes[i].priceUSD}</div>\n`
                htmlString += `<div class="cart-btn" id="${demoBikes[i]._id}">Add to Cart</div>\n`


                gridItem.innerHTML += htmlString
            }
})

  //query to get the html elements
  const addToCartButtons = document.querySelectorAll(".cart-btn");
  const Cart = document.getElementById("cart");

  const shoppingCart = [];
  console.log(shoppingCart);
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("button working");
      const itemId = button.getAttribute("id"); //this needs to be the items id in the database--> each button needs the html id of the data's id
      //console.log(itemID);
      addToCart(itemId);
      console.log(shoppingCart);
    });
  });
  console.log(shoppingCart);

  async function addToCart(itemId) {
    console.log(itemId);
    //const item = document.getElementById("itemId");
    try {
      const object = await axios.GET("/demos/:${itemId}");
      const itemData = response.data
      const clonedItem = object.cloneNode(true);
      const htmlShoppingCart = document.getElementById("cart");
      shoppingCart.push(clonedItem);
      htmlShoppingCart.appendChild(clonedItem);
    } catch (error) {
      alert("An error occurred");
      console.error(error);
    }
  }
});

//     try {
//       // Send a POST request to add the item to the shopping cart
//       const response = await axios.post(`/cart/${itemId}`);
//       //CHECK^

//       if (response.status === 200) {
//         const item = document.getElementById("itemId");
//         const clonedItem = item.cloneNode(true);
//         const htmlShoppingCart = document.getElementById("cart");
//         shoppingCart.push(clonedItem);
//         htmlShoppingCart.appendChild(clonedItem);
//       } else if (response.status === 404) {
//         alert("Item not found");
//       } else {
//         alert("An error occurred");
//       }
//     } catch (error) {
//       alert("An error occurred");
//       console.error(error);
//     }
//   }
// });

