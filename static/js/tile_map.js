$(function() {
    var map = L.map('map', {
        zoomControl: false
    }).setView([54.7, -3], 6);

    L.control.zoomslider().addTo(map);

    // This gets some weird 404s when the request type is json. Not sure why it's 
    // expecting json when it should be expecting x-protobuf. All the ones expecting x-protobuf work fine.
    var config = {
      url: "http://{s}.tiles.mapbox.com/v4/violett.49e091ba/{z}/{x}/{y}.vector.pbf?access_token=sk.eyJ1IjoidmlvbGV0dCIsImEiOiJOaG5rLTFzIn0.ZMgU68F1fNtcTRE8orT3Uw",
      clickableLayers: ["constits"],
      mutexToggle: true,
      getIDForLayerFeature: function(feature) {
        return feature.properties.id;
      },
      style: function(feature) {
        var style = {};
          style.color = 'rgba(44, 15, 36, 0.05)';
          style.outline = {
            color: 'rgb(127, 42, 68)',
            size: 1
          };
          style.selected = {
            color: 'rgba(44, 15, 36, 0.2)',
            outline: {
              color: 'rgb(44, 15, 36)',
              size: 2.5 
            }
          };
        return style;
      },
      onClick: function(event) {
        $('#constit-name').text(event.feature.properties.name);
      }
    };
     
    var mvtSource = new L.TileLayer.MVTSource(config);
    map.addLayer(mvtSource);

     L.tileLayer('http://{s}.tiles.mapbox.com/v4/{mapID}/{z}/{x}/{y}.png?access_token={token}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        mapID: 'violett.m2bjk7ma',
        token: 'pk.eyJ1IjoidmlvbGV0dCIsImEiOiI3bjNWeU1NIn0.hqY_yHNXSXOGeEmCGJ7eIQ'
    }).addTo(map);

});