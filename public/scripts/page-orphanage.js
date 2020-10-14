const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//CREATE MAP - LAT/LONG (51.505, -0.09) & MAP ZOOM (13)
const map = L.map('mapid',options).setView([-23.6542021,-46.7211556], 15)

//CREATE AND ADD TILELAYER- FREE MAP
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//CREATE ICON - PIN 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2] //msg aside to the icon
})


//CREATE AND ADD MARKER - PIN & PIN MSG
L
.marker([-23.6542021,-46.7211556], { icon })
.addTo(map)

//IMAGES GALERY
function selectImage(event) {
    const button = event.currentTarget

    //REMOVE ALL .active CLASS
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //SELECTING THE CLICKED IMAGE,
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img ")

    //UPDATE IMAGE CONTAINER
    imageContainer.src = image.src

    //ADD .active CLASS ON THE SELECTED BUTTON
    button.classList.add("active")
}