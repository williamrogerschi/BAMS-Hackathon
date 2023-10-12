
//Global DB Clones
let brandsDB = new Array
let framesDB = new Array

//Global Frame and Frame Options
let selectedFObject = new Object
let selectedFID = new String()
let selectedFBrand = new String()
let selectedFModel = new String()
let selectedFSize = new String()
let selectedFColor = new String()
let selectedFDisc = new String()
let selectedFWheel =  new String()

//Functions
const populateFrameSizeOptions = (obj) => {

    //Size Options
    const sizeDropdownOptions = document.querySelector('#frameConfig-availSizes')
    sizeDropdownOptions.innerHTML = `<option>--Select a Size--</option>`
    let sizes = obj.availSizes
    console.log(sizes)
    for (let i=0; i<sizes.length; i++) {
        sizeDropdownOptions.innerHTML += `<option value="${sizes[i]}">${sizes[i]}</option><\n>`
    }

    //Color Options
    const colorDropdownOptions = document.querySelector('#frameConfig-availColors')
    colorDropdownOptions.innerHTML = `<option>--Select a Color--</option>`
    let colors = obj.availColors
    console.log(colors)
    for (let i=0; i<colors.length; i++) {
        colorDropdownOptions.innerHTML += `<option value="${colors[i]}">${colors[i]}</option><\n>`
    }

    //Disc Options
    const discDropdownOptions = document.querySelector('#frameConfig-availDisc')
    discDropdownOptions.innerHTML = `<option>--Select a Brake Type--</option>`
    let discs = obj.availDisc
    console.log(discs)
    for (let i=0; i<discs.length; i++) {
        discDropdownOptions.innerHTML += `<option value="${discs[i]}">${discs[i]}</option><\n>`
    }

    //Wheel Options
    const wheelDropdownOptions = document.querySelector('#frameConfig-availWheel')
    wheelDropdownOptions.innerHTML = `<option>--Select a Wheel Size--</option>`
    let wheels = obj.availWheel
    console.log(discs)
    for (let i=0; i<wheels.length; i++) {
        wheelDropdownOptions.innerHTML += `<option value="${wheels[i]}">${wheels[i]}</option><\n>`
    }
}

const renderFrameChoices = (obj) => {
    
}

//LISTENERS

//Frame Selection Upon Window Load
window.addEventListener('load', async (event) => {
    event.preventDefault()
    console.log("Loading")
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
        selectedFModel = drpDwnFrame.options[drpDwnFrame.selectedIndex].value
        selectedFObject = framesDB.data.find(obj => obj.modelName==selectedFModel)
        // console.log(selectedFModel)
        // console.log(selectedFObject)
        console.log("frame selected")
        populateFrameSizeOptions(selectedFObject)
        document.querySelector('#frame-options-selector').style.display = "block"

    }
})

//Select Fram Options, Show Configured Bike/Frame
const btnFrameOptionsSelect = document.querySelector('#btn-frame-options-select')

btnFrameOptionsSelect.addEventListener("click", () => {
    const drpDwnSize = document.querySelector('#frameConfig-availSizes')
    const drpDwnColor = document.querySelector('#frameConfig-availColors')
    const drpDwnDisc = document.querySelector('#frameConfig-availDisc')
    const drpDwnWheel = document.querySelector('#frameConfig-availWheel')
    
    
    const drpDwnFrame = document.querySelector('#frameConfig-frame')
    if ( drpDwnSize.selectedIndex==0 || drpDwnColor.selectedIndex==0 || drpDwnDisc.selectedIndex==0 || drpDwnWheel.selectedIndex==0) {
        window.alert("Please make a selection for all options")
    } else {
        selectedFSize = drpDwnSize.options[drpDwnSize.selectedIndex].value
        selectedFColor = drpDwnColor.options[drpDwnColor.selectedIndex].value
        selectedFDisc = drpDwnDisc.options[drpDwnDisc.selectedIndex].value
        selectedFWheel = drpDwnWheel.options[drpDwnWheel.selectedIndex].value
        document.querySelector('#show-frame-selection').style.display = "block"
        console.log("frame options selected")
    }
})








