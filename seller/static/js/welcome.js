  mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1Ym83NzEiLCJhIjoiY2tndXN1cTUzMTdyMTJ6a3l3ajl5c3hmZSJ9.KnsvmK07VPo0urBClaRjlw';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-79.4512, 43.6568],
        zoom: 13
    });

       map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );
    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));