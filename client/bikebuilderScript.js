

let brandsDB = new Array
let framesDB = new Array

//Frame and Options
let selectedFObject = new Object
let selectedFID = new String()
let selectedFBrand = new String()
let selectedFModel = new String()
let selectedFSize = new String()
let selectedFColor = new String()
let selectedFDisc = new String()
let selectedFWheel =  new String()

//Frame Selection Upon Window Load
window.addEventListener('load', async (event) => {
    event.preventDefault()
    framesDB = await axios.get(`http://localhost:3001/bike-builder/frames`)
    brandsDB = await axios.get(`http://localhost:3001/brands`)
    let frames = framesDB.data
    const frameDropdownOptions = document.querySelector('#frameConfig-frame')
    for (let i=0; i<frames.length; i++) {
        let brandObj = await axios.get(`http://localhost:3001/brands/${frames[i].brand}`)
        let brand = brandObj.data.name
        let model = frames[i].modelName
        frameDropdownOptions.innerHTML += `<option value="${model}">${brand} - ${model}</option><\n>`
    }
}
)

//Select Frame, Show Frame Options
const btnFrameSelect = document.querySelector('#btn-frame-select')

btnFrameSelect.addEventListener("click", () => {
    const drpDwnFrame = document.querySelector('#frameConfig-frame')
    if (drpDwnFrame.selectedIndex==0) {
        window.alert("Please select an available frame")
    } else {
        let selectedFModel = drpDwnFrame.options[drpDwnFrame.selectedIndex].value
        let selectedFObject = framesDB.data.find(obj => obj.modelName==selectedFModel)
        console.log(selectedFModel)
        console.log(selectedFObject)
        document.querySelector('#frame-options-selector').style.display = "block"
    }


})






// let runFrames = async () => {
//     framesDB = await axios.get(`http://localhost:3001/bike-builder/frames`)
//     let frames = framesDB.data
//     const frameDropdownOptions = document.querySelector('#frameConfig-frame')
//     for (let i=0; i<frames.length; i++) {
//         let brandObj = await axios.get(`http://localhost:3001/brands/${frames[i].brand}`)
//         let brand = brandObj.data.name
//         let model = frames[i].modelName
//         frameDropdownOptions.innerHTML += `<option value="${model}">${brand} - ${model}</option><\n>`
//     }
    
// }

// runFrames()

// let populateFrameOptions = async () => {
//     console.log("ready to populate options")
// }

// const frameForm = document.querySelector('#frame-selector')
// const frameSubmit = frameForm.querySelector(`[type=Submit]`)
// console.log(frameForm)
// console.log(frameSubmit)

// frameForm.addEventListener("submit", populateFrameOptions)





let frameDropdownHTML = new String




