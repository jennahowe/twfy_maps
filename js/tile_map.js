$(function() {
    
    var map = L.map('map', {
        zoomControl: false
    }).setView([54.7, -3], 6);

    

    var constits = L.tileLayer('http://{s}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={token}', {
        attribution: '<a href="http://mapit.mysociety.org">Powered by MapIt</a>',
        maxZoom: 18,
        subdomains: ["a", "b", "c", "d"],
        mapId: "violett.8d99a6a4",
        token: "sk.eyJ1IjoidmlvbGV0dCIsImEiOiJOaG5rLTFzIn0.ZMgU68F1fNtcTRE8orT3Uw"
    })

    constits.addTo(map);
    
    /*
    L.mapbox.accessToken = 'pk.eyJ1IjoidmlvbGV0dCIsImEiOiI3bjNWeU1NIn0.hqY_yHNXSXOGeEmCGJ7eIQ';
    var map = L.mapbox.map('map', 'violett.b4e08fa1', {
      zoomControl: false
    });
    */
    L.control.zoomslider().addTo(map);
    console.log(constits)
});