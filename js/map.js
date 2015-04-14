$(function() {
    var map = L.map ('map', {
            center: [54.95, -3.5],
            zoom: 5.5,
            minZoom: 5.5,
            maxZoom: 5.5
        });

    var tileLayer = L.tileLayer( 'https://{s}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={token}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        subdomains: ['a','b','c','d'],
        mapId: 'violett.lno6jpc5',
        token: 'pk.eyJ1IjoidmlvbGV0dCIsImEiOiI3bjNWeU1NIn0.hqY_yHNXSXOGeEmCGJ7eIQ'
    }).addTo(map);
});
