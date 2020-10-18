//create map - lat/long (51.505, -0.09) & map zoom (13)
const map = L.map('mapid').setView([-23.6542021,-46.7211556], 15)

//create and add tileLayer- free map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon - pin 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2] //msg aside to the icon
})

function addMarker({id, name, lat, lng}){
    console.log(lat)
    console.log(lng)
    //create popup - pin msg
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight:240
    }).setContent(`${name} <a href="/nursinghome?id=${id}"><img src="/images/arrow-white.svg"></a>`)
    
    //create and add marker - pin & pin msg
    L
    .marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
    
}

const nursinghomesSpan = document.querySelectorAll('.nursinghomes span')
console.log(nursinghomesSpan)
nursinghomesSpan.forEach( span => {
    const nursinghome = {
        id: span.dataset.id, 
        name: span.dataset.name, 
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }

    addMarker(nursinghome)
})