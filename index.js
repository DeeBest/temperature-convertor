const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

celsius.addEventListener('change', updateTemp);
celsius.addEventListener('input', updateTemp);

kelvin.addEventListener('change', updateTemp);
kelvin.addEventListener('input', updateTemp);

fahrenheit.addEventListener('change', updateTemp);
fahrenheit.addEventListener('input', updateTemp);

function updateTemp(e) {
  const currentTempValue = +e.target.value;

  switch (e.target.id) {
    case 'celsius':
      kelvin.value = (currentTempValue + 273.15).toFixed(2);
      fahrenheit.value = (currentTempValue * 1.8 + 32).toFixed(2);
      break;
    case 'fahrenheit':
      celsius.value = ((currentTempValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((currentTempValue - 32) / 1.8 + 273.15).toFixed(2);
      break;
    case 'kelvin':
      celsius.value = (currentTempValue - 273.15).toFixed(2);
      fahrenheit.value = ((currentTempValue - 273.15) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  if (body.scrollHeight <= window.innerHeight) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});
