var button = document.getElementById("coordenadas");

  button.addEventListener('click',function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getPosition(showPosition);
      } else {
        button.innerHTML = "Geolocation is not supported by this browser.";}
      });

  function getPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
      $.ajax({
        url: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/f5f581cf3ec6fc06860ecff143e9c800/${latitude},${longitude}`,
        type: 'GET',
      }).done(jsonCall).fail(function() {
            console.log("Your second API call blew it.");
          });

  };

  function jsonCall(json) {
    console.log(json);
  }


  $(document).ready();
