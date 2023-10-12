const demoPic = document.querySelector('.grid-image')



// MAIN function for API calls
window.addEventListener('load', async (event) => {
    event.preventDefault()
        let demoAll = await axios.get(`http://localhost:3001/demos`)
        let demoBikes = demoAll.data
        let gridHTML = document.getElementById("demo-bikes-container")
        console.log(demoBikes)
            for(let i = 0; i < demoBikes.length; i++) {
                gridHTML.innerHTML += `<a class="grid-item" id="box${i}" href="#">`
               
                let gridItem = document.querySelector(`#box${i}`)


                let htmlString = new String()

                htmlString += `<img class="grid-image" src="${demoBikes[i].imageUrl}">\n`
                htmlString += `<div class="grid-brand">${demoBikes[i].brand}</div>\n`
                htmlString += `<div class="grid-model">${demoBikes[i].model}</div>\n`
                htmlString += `<div class="grid-price">${demoBikes[i].price}</div>\n`
                htmlString += `<button class="cart-btn" id="${demoBikes[i]._id}></button>`
                

                gridItem.innerHTML += htmlString
            }
})


