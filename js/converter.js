export const setupConverter = () => {
  const converterForm = document.querySelector('.converter-form');
  const converterInput = document.querySelector('.converter-input');
  const converterFrom = document.querySelector('.converter-from');
  const converterTo = document.querySelector('.converter-to');
  const converterResult = document.querySelector('.converter-result');

  const lengthUnit = [
    { name: 'meter', base: 1 },
    { name: 'kilometer', base: 1000 },
    { name: 'centimeter', base: 0.01 },
    { name: 'millimeter', base: 0.001 },
    { name: 'inch', base: 0.0254 },
    { name: 'foot', base: 0.3048 },
    { name: 'yard', base: 0.9144 },
    { name: 'mile', base: 1609.344 },
  ];

  lengthUnit.forEach((unit) => {
    const optionFrom = document.createElement('option');
    optionFrom.value = unit.base;
    optionFrom.textContent = unit.name;
    converterFrom.appendChild(optionFrom);

    const optionTo = document.createElement('option');
    optionTo.value = unit.base;
    optionTo.textContent = unit.name;
    converterTo.appendChild(optionTo);
  });

  // Set initial selections
  // meter is index 0
  converterFrom.selectedIndex = 0;
  // kilometer is index 1
  converterTo.selectedIndex = 1;

  const updateResult = () => {
    const inputValue = parseFloat(converterInput.value);

    if (isNaN(inputValue)) {
      converterResult.textContent = 'Please enter a valid number';
      return;
    }

    const fromBase = parseFloat(converterFrom.value);
    const toBase = parseFloat(converterTo.value);

    const resultValue = (inputValue * fromBase) / toBase;

    // Get the name of the selected units for display
    const fromUnitName = converterFrom.options[converterFrom.selectedIndex].textContent;
    const toUnitName = converterTo.options[converterTo.selectedIndex].textContent;

    converterResult.textContent = `${inputValue} ${fromUnitName} = ${resultValue.toFixed(
      3
    )} ${toUnitName}`;
  };

  converterForm.addEventListener('input', updateResult);

  // Initial calculation
  updateResult();
};
