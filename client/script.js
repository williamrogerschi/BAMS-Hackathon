const demoPic = document.querySelector('.grid-image')



// MAIN function for API calls
window.addEventListener('load', async (event) => {
    event.preventDefault()
        let demoAll = await axios.get(`http://localhost:3001/demos`)
        let demoBikes = demoAll.data
        let gridHTML = document.getElementById("demo-bikes-container")
        console.log(demoBikes)
            for(let i = 0; i < demoBikes.length; i++) {
                gridHTML.innerHTML += `<a class="grid-item" id="box${i}">` //also added it up here - we can see once the button actually functions if it will let us click both while the whole a div is a link.
               
                let gridItem = document.querySelector(`#box${i}`)

                let htmlString = new String()
                
                // htmlString += `<a class="demo-image" target="_blank" href="${demoBikes[i].url}"><img class="grid-image" src="${demoBikes[i].imageUrl}"></a>\n` //possibly can add the link to the ex site in the image?
                htmlString += `<img class="grid-image" src="${demoBikes[i].imageUrl}">\n` //possibly can add the link to the ex site in the image?
                htmlString += `<div class="grid-brand">${demoBikes[i].brand}</div>\n`
                htmlString += `<div class="grid-model">${demoBikes[i].model}</div>\n`
                htmlString += `<div class="grid-price">${demoBikes[i].priceUSD}</div>\n`
                htmlString += `<div class="cart-btn" id="${demoBikes[i]._id}">Add to Cart</div>\n`


                gridItem.innerHTML += htmlString
            }
})


