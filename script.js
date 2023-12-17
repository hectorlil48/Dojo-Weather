// Alert when city clicked
function loadTemp() {
  alert("Loading weather report...");
}

// Hide container when cookie is button clicked
function hide() {
  let hideContainer = document.querySelector("#hide-container");
  hideContainer.style.display = "none";
}

function celsiusFahrenheit(element) {
  console.log("It is " + element.value);
  //   Get all the temps

  let temps = document.querySelectorAll(".temps");

  //   if value is F then change celsius to fahrenheit
  if (element.value === "F") {
    for (let i = 0; i < temps.length; i++) {
      let value = parseInt(temps[i].innerText);
      console.log(typeof value);
      let fahrenheit = (value * 9) / 5 + 32;
      temps[i].innerText = Math.floor(fahrenheit) + "°";
    }

    // if C then change fahrenheit to celsius
  } else if (element.value === "C") {
    for (let i = 0; i < temps.length; i++) {
      let value = parseInt(temps[i].innerText);
      console.log(typeof value);
      let celsius = ((value - 32) * 5) / 9;
      temps[i].innerText = Math.floor(celsius) + "°";
    }
  }
}
