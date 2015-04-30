$(function() {
    
    var map = L.map('map', {
        zoomControl: false
    }).setView([54.7, -3], 6);

    L.control.zoomslider().addTo(map);

    // This gets some weird 404s when the request type is json. Not sure why it's 
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