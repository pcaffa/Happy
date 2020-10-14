//create map - lat/long (51.505, -0.09) & map zoom (13)
const map = L.map('mapid').setView([-23.6542021,-46.7211556], 15)

//create and add tileLayer- free map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon - pin 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2] //msg aside to the icon
})

//create popup - pin msg
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

//create and add marker - pin & pin msg
L
.marker([-23.6542021,-46.7211556], { icon })
.addTo(map)
.bindPopup(popup)