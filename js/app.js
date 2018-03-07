var button = document.getElementById("coordenadas");

  button.addEventListener('click',function getLocation(e) {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(getPosition);
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
      }).done(paintClima).fail(function() {
            console.log("Your second API call blew it.");
          });

  };

  function paintClima(json) {
    let climaContainer = document.getElementById('climaDailyContainer');
    const infoClima = json.currently;
    console.log(infoClima);

    let templete = `<div> Temperatura ${json.currently.apparentTemperature}</div>
    <div> Humedad ${json.currently.humidity}</div>
    <div> RayosUv ${json.currently.uvIndex}</div>
    <div>Presion ${json.currently.pressure}</div>`
    climaContainer.innerHTML += templete;
  }


  // $(document).ready();
