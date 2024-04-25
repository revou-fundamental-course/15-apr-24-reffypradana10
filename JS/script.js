document.addEventListener("DOMContentLoaded", function () {
  const label1 = document.querySelector(".label1");
  const label2 = document.querySelector(".label2");
  const celciusInput = document.getElementById("celciusInput");
  const fahrenheitOutput = document.getElementById("fahrenheitOutput");
  const caraKalkulasi = document.getElementById("caraKalkulasi");
  const fahrenheitToCelciusLink = document.getElementById("fahrenheitToCelciusLink");
  const konversiButton = document.querySelector(".konversi");
  const resetButton = document.querySelector(".reset");
  const reverseButton = document.querySelector(".reverse");

  let isCelciusToFahrenheit = true;

  function konversiCelciusToFahrenheit() {
    const celciusValue = parseFloat(celciusInput.value);
    const fahrenheitValue = (celciusValue * 9) / 5 + 32;
    fahrenheitOutput.value = fahrenheitValue.toFixed(2);
    caraKalkulasi.value = `${celciusValue} °C × 9/5 + 32 = ${fahrenheitValue.toFixed(2)} °F`;
  }

  function konversiFahrenheitToCelcius() {
    const fahrenheitValue = parseFloat(celciusInput.value);
    const celciusValue = ((fahrenheitValue - 32) * 5) / 9;
    fahrenheitOutput.value = celciusValue.toFixed(2);
    caraKalkulasi.value = `${fahrenheitValue} °F - 32 × 5/9 = ${celciusValue.toFixed(2)} °C`;
  }

  function updateLabels() {
    if (isCelciusToFahrenheit) {
      label1.textContent = "Celcius (°C)";
      label2.textContent = "Fahrenheit (°F)";
      fahrenheitToCelciusLink.textContent = "Konversi Farenheit ke Celcius";
    } else {
      label1.textContent = "Fahrenheit (°F)";
      label2.textContent = "Celcius (°C)";
      fahrenheitToCelciusLink.textContent = "Konversi Celcius ke Fahrenheit";
    }
  }

  konversiButton.addEventListener("click", function () {
    if (isCelciusToFahrenheit) {
      konversiCelciusToFahrenheit();
    } else {
      konversiFahrenheitToCelcius();
    }
    updateLabels();
  });

  resetButton.addEventListener("click", function () {
    celciusInput.value = "";
    fahrenheitOutput.value = "";
    caraKalkulasi.value = "";
    updateLabels();
  });

  reverseButton.addEventListener("click", function () {
    celciusInput.value = "";
    fahrenheitOutput.value = "";
    caraKalkulasi.value = "";

    isCelciusToFahrenheit = !isCelciusToFahrenheit;

    if (isCelciusToFahrenheit) {
      konversiButton.textContent = "Konversi ke Fahrenheit";
    } else {
      konversiButton.textContent = "Konversi ke Celcius";
    }

    updateLabels();
  });

  fahrenheitToCelciusLink.addEventListener("click", function (event) {
    event.preventDefault();
    reverseButton.click();
  });

  updateLabels();
});
