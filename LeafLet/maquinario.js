const mapa = L.map('meu-mapa').setView([-22.272312, -42.502495], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(mapa);

        L.marker([-22.272312, -42.502495]).addTo(mapa)
            .bindPopup('<b>Memorial Parque das Montanhas</b><br>Localização exata.')
            .openPopup();