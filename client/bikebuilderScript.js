// const dropdown = document.querySelector('button')
// const movieResults = document.querySelector('div')
// button.addEventListener('click', async () => {
//     console.log("clicked")
//     let response = await axios.get(
//         `http://localhost:3001/movies/`
//     )
//     let movies = response.data
//     console.log(movies)
//     movies.forEach(element => {
//         // movieResults.innerHTML += JSON.stringify(element)
//         movieResults.innerHTML += element.title
//     });
// })

let brandsDB = new Array
let framesDB = new Array

let runAPI = async () => {
    brandsDB = await axios.get(`http://localhost:3001/brands`)
    framesDB = await axios.get(`http://localhost:3001/bike-builder/frames`)
    console.log(brandsDB)
    console.log(framesDB)
}

runAPI()

// const frameConfigFrameDropdown = document.querySelector('#frameConfig-frame')



