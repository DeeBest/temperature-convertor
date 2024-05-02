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
  console.log(e.target.id);
}
