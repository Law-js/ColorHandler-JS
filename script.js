const inputs = document.querySelectorAll('input');

let newRgb = [255, 0, 0];

const parseToValidRgb = () => {
  const validRgb = `Rgb(${newRgb[0]}, ${newRgb[1]}, ${newRgb[2]})`;

  return validRgb;
};

const handleColor = (evt, index) => {
  newRgb[index] = evt.currentTarget.value;
  document.documentElement.style.setProperty('--color', parseToValidRgb());
};

inputs.forEach((input, index) => {
  input.addEventListener('input', (evt) => handleColor(evt, index));
});
