

let brandsDB = new Array
let framesDB = new Array


window.addEventListener('load', async (event) => {
    event.preventDefault()
    framesDB = await axios.get(`http://localhost:3001/bike-builder/frames`)
    brandsDB = await axios.get(`http://localhost:3001/brands`)
})

let runFrames = async () => {
    framesDB = await axios.get(`http://localhost:3001/bike-builder/frames`)
    let frames = framesDB.data
    const frameDropdownOptions = document.querySelector('#frameConfig-frame')
    for (let i=0; i<frames.length; i++) {
        let brandObj = await axios.get(`http://localhost:3001/brands/${frames[i].brand}`)
        let brand = brandObj.data.name
        let model = frames[i].modelName
        frameDropdownOptions.innerHTML += `<option value="${model}">${brand} - ${model}</option><\n>`
    }
    
}

runFrames()

let populateFrameOptions = async () => {
    console.log("ready to populate options")
}

const frameForm = document.querySelector('#frame-selector')
const frameSubmit = frameForm.querySelector(`[type=Submit]`)
console.log(frameForm)
console.log(frameSubmit)

frameForm.addEventListener("submit", populateFrameOptions)





let frameDropdownHTML = new String




