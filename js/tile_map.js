$(function() {
    
    var map = L.map('map', {
        zoomControl: false
    }).setView([54.7, -3], 6);
    /*
    var constits = L.mapboxGL({
      container: 'map',
      //style: 'https://www.mapbox.com/mapbox-gl-styles/styles/bright-v7.json',
      style: 'map_style.json',
      center: [54.7, -3],
      zoom: 6,
      accessToken: 'pk.eyJ1IjoidmlvbGV0dCIsImEiOiI3bjNWeU1NIn0.hqY_yHNXSXOGeEmCGJ7eIQ'
    })

    constits.addTo(map);
    */
    
    /*var map = L.mapbox.map('map', 'violett.8d99a6a4', {
      zoomControl: false
    });
    */
    L.control.zoomslider().addTo(map);
    //console.log(constits)
    
    /*

    // I think this would work except for the 404s I get for the .pbf requests, maybe not in firefox though?
    // Firefox says "Error: WebGL: Exceeded 16 live WebGL contexts for this principal, losing the least recently
    // used one on", which is to do with how firefox handles WebGL (chrome doesn't say this), not really mapboxgl's
    // fault
    mapboxgl.accessToken = "pk.eyJ1IjoidmlvbGV0dCIsImEiOiI3bjNWeU1NIn0.hqY_yHNXSXOGeEmCGJ7eIQ";

    var map = new mapboxgl.Map({
      container: 'map',
      //style: 'https://www.mapbox.com/mapbox-gl-styles/sytles/bright-v7.json',
      style: 'map_style.json',
      center: [54.7, -3],
      zoom: 6
    });
    */
    // This at least renders a map even though it still gets 404s when the request type is json. Not sure why it's 
    // expecting json when it should be expecting x-protobuf. All the ones expecting x-protobuf work fine.
    var config = {
      url: "http://{s}.tiles.mapbox.com/v4/violett.8d99a6a4/{z}/{x}/{y}.vector.pbf?access_token=sk.eyJ1IjoidmlvbGV0dCIsImEiOiJOaG5rLTFzIn0.ZMgU68F1fNtcTRE8orT3Uw",
      clickableLayers: ["constits"],
      mutexToggle: true,
      getIDForLayerFeature: function(feature) {
        return feature.properties.name;
      },
      style: function (feature) {
        var style = {};
          style.color = 'rgba(44, 15, 36, 1)';
          style.outline = {
            color: 'rgb(204, 233, 188)',
            size: 1
          };
          style.selected = {
            color: 'rgba(44, 15, 36, 0.7)',
            outline: {
              color: 'rgb(205, 173, 228)',
              size: 2
            }
          };
        return style;
      }
    };
     
    var mvtSource = new L.TileLayer.MVTSource(config);
    map.addLayer(mvtSource);

    console.log(mvtSource);
});