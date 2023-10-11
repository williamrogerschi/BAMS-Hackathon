const demoPic = document.querySelector('.grid-image')



// MAIN function for API calls
window.addEventListener('load', async (event) => {
    event.preventDefault()
        let demoAll = await axios.get(`http://localhost:3001/demos`)
        console.log(demoAll)
            for(let i = 0; i < demoAll.length; i++) {

            //     let htmlString = new String()

            //     htmlString += `<img class="grid-image" src="${demoAll[i].imageUrl}">\n`
            //     htmlString += `<div class="grid-brand">${demoAll[i].brand}</div>`
            //     htmlString += `<div class="grid-model">${demoAll[i].model}</div>\n`
            //     htmlString += `<div class="grid-price">${demoAll[i].price}</div>\n`
            
            // document.getElementById(`${demoAll[i].brand}`).innerHTML - htmlString
            // document.getElementById(`${i + 1}`).innerHTML = htmlString

            let dPic = demoAll.data.brand
            demoPic.innerHTML = `<img src=${dPic}>`
            }
})


