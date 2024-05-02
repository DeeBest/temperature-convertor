const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

celsius.addEventListener('change', updateTemp);

kelvin.addEventListener('change', updateTemp);

fahrenheit.addEventListener('change', updateTemp);

function updateTemp(e) {
  const currentTempValue = +e.target.value;

  switch (e.target.id) {
    case 'celsius':
      kelvin.value = (currentTempValue + 273.32).toFixed(2);
      fahrenheit.value = (currentTempValue * 1.8 + 32).toFixed(2);
      break;
    case 'fahrenheit':
      celsius.value = ((currentTempValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((currentTempValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case 'kelvin':
      celsius.value = (currentTempValue - 273.32).toFixed(2);
      fahrenheit.value = ((currentTempValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}
