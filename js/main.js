function initMap() {
  var options = {
    zoom: 15,
    center: { lat: 37.2500633, lng: -121.8351096 }
  };

  var map = new google.maps.Map(document.getElementById("map"), options);

  var marker = new google.maps.Marker({
    position: { lat: 37.250337, lng: -121.832932 },
    map: map
  });
}
