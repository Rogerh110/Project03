
// Initialize and add the map
let map;

async function initMap() {
  // The location of Cathedral Rock
  const position = { lat: 34.822427, lng: -111.789328 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Cathedral Rock
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Cathedral Rock
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Cathedral Rock",
  });
}

initMap();



// function init() {

//   var el = document.getElementById('canvas');
//   var myLocation = new google.maps.LatLng(34.822427, -111.787611);
//   var mapOptions = {
//     center: myLocation,
//     zoom: 18,
//     myTypeId: google.maps.myTypeId.SATELLITE,
//     myTypeIdControlOptions: { posiition: google.maps.CotrolPosition.BOTTOM_CENTER }
//   };

//   var myMap = new google.maps.Map(el, mapOptions);

//   var marker = new google.maps.Marker({
//     posiition: myLocation,
//     map: myMap,
//     animation: google.maps.Animation.BOUNCE,
//     icon: 'hikingimg.png'
//   });

//   var contentString = '<h1>Cathedral Rock </h1><p>Renowned red rock formation in Coconino National Forest & a popular spot for sunset photography.</p>'

//   var infoWindow = new google.maps.InfoWindow({
//     content: contentString
//   });
//   google.maps.event.addDomListener(marker, 'mouseover', function () {
//     infoWindow.open(myMap, marker);
//   });



// }


// google.maps.event.addDomListener(window, 'load', init);