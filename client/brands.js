window.addEventListener('load', async (event) => {
    event.preventDefault()
        let brandAll = await axios.get(`http://localhost:3001/brands`)
        let brandPic = brandAll.data
        let bodyHTML = document.getElementById("brand-logo-container")
        console.log(brandPic)
            for(let i = 0; i < brandPic.length; i++) {
                bodyHTML.innerHTML += `<a class="grid-item" id="box${i}">` //also added it up here - we can see once the button actually functions if it will let us click both while the whole a div is a link.
                let gridItem = document.querySelector(`#box${i}`)

                let htmlString = new String()
                
                htmlString += `<img class="grid-image" src="${brandPic[i].picURL}">\n` //possibly can add the link to the ex site in the image?


                gridItem.innerHTML += htmlString
            }
})

