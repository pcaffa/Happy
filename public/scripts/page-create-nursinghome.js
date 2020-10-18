//create map - lat/long (51.505, -0.09) & map zoom (13)
const map = L.map('mapid').setView([-23.6542021,-46.7211556], 15)

//create and add tileLayer- free map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon - pin 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]
})

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

function addPhotoField() {
    const container = document.querySelector('#images')
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    //realize clone of the last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    input.value = ""

    //add clone of the container
    container.appendChild(newFieldContainer) 
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return
    }    
    //remove parent
    span.parentNode.remove()
}

function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach(button =>button.classList.remove('active'))

    const button = event.currentTarget
    button.classList.add('active')

    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value

}

function validate(event) {
    const latitude = document.querySelector('#lat').value
    const longitude = document.querySelector('#lng').value
    
    if(latitude =="" && longitude=="" ){
        alert("Verifique se a localização está selecionada, pois todos os campos devem ser preenchidos!")
        event.preventDefault()
    } else {
        return
    }    
}
