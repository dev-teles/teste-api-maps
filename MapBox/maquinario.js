// Access Token (mapbox.com)
mapboxgl.accessToken = 'ResgateUmTokenNo=Mapbox.com';

//. Coordenadas [Longitude, Latitude]
const coordenadasMemorial = [-42.502495, -22.272312];

// Mapa
const mapa = new mapboxgl.Map({
    container: 'meu-mapa',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: coordenadasMemorial,
    zoom: 16
});

// Popup
const popup = new mapboxgl.Popup({ offset: 25 })
    .setHTML('<b>Memorial Parque das Montanhas</b><br>Localização exata.');

// marcador no mapa
new mapboxgl.Marker()
    .setLngLat(coordenadasMemorial)
    .setPopup(popup)
    .addTo(mapa);