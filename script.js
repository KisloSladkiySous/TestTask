
let map;
let gMarkers=[];
function initMap() {
  map = new google.maps.Map(document.getElementById("myModal"), {
    center: { lat: 55.45, lng: 37.36 },
    zoom: 8,
  });
  
  map.addListener('click', function(e) {

    console.log(e);
    addMarker(e.latLng);
  });
}

function addMarker(latLng) {
  let marker = new google.maps.Marker({
      map: map,
      position: latLng,
      draggable: true
  });
  for (var i = 0; i < gMarkers.length; i++) {
    gMarkers[i].setMap(null);
  }
    
  let lat = marker.getPosition().lat();
  let lng = marker.getPosition().lng();
  gMarkers.push(marker);
  getReverseGeocodingData(lat, lng);
}

let input=document.getElementById('address');
function getReverseGeocodingData(lat, lng) {
  let latlng = new google.maps.LatLng(lat, lng);
  let geocoder = new google.maps.Geocoder();
  geocoder.geocode({ 'latLng': latlng }, function (results, status) {
      if (status !== google.maps.GeocoderStatus.OK) {
      }
      if (status == google.maps.GeocoderStatus.OK) {
          let address = (results[0].formatted_address);
          input.value=address;
          input.style.fontSize="12px";
          input.style.fontFamily="Roboto";
      }
  });
}
