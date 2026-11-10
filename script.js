// Create the map
const map = L.map("map").setView(
    [8.3700, 124.8600],
    13
);

// Add the OpenStreetMap tile layer
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }
).addTo(map);

// Add a marker
const marker = L.marker([8.3700, 124.8600])
    .addTo(map);

marker.bindPopup(
    "<b>Manolo Fortich</b><p>Welcome to Bukidnon!</p>"
);

// Add a circle
L.circle([ 8.46451,124.82078], {
    color: "blue",
    fillColor: "#30a3ec",
    fillOpacity: 0.3,
    radius: 500
}).addTo(map);

// Show latitude and longitude when clicking the map
map.on("click", function (event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    L.popup()
        .setLatLng(event.latlng)
        .setContent(
            "Latitude: " + lat.toFixed(5) +
            "<br>Longitude: " + lng.toFixed(5)
        )
        .openOn(map);
});

// List of locations
const locations = [
    { name: "School", lat: 8.45912, lng:124.82365 },
    { name: "Baranggay", lat:8.45841, lng:124.82414 },
    { name: "Cacao Farm", lat: 8.46976, lng:124.81827 }
];

// Add markers for each location
locations.forEach(function (place) {
    L.marker([place.lat, place.lng])
        .addTo(map)
        .bindPopup(place.name);
});