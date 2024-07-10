    const lengthUnits = ['meter', 'kilometer', 'centimeter', 'millimeter', 'mile', 'yard', 'foot', 'inch'];
    const weightUnits = ['kilogram', 'gram', 'milligram', 'tonne', 'pound', 'ounce'];
    const temperatureUnits = ['celsius', 'fahrenheit', 'kelvin'];

    const unitTypeSelect = document.getElementById('unitType');
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
    const fromValueInput = document.getElementById('fromValue');
    const resultDiv = document.getElementById('result');

    unitTypeSelect.addEventListener('change', populateUnits);
    populateUnits();

    function populateUnits() {
      const selectedUnitType = unitTypeSelect.value;
      let units = [];

      switch (selectedUnitType) {
        case 'length':
          units = lengthUnits;
          break;
        case 'weight':
          units = weightUnits;
          break;
        case 'temperature':
          units = temperatureUnits;
          break;
        default:
          break;
      }

      // Clear existing options
      fromUnitSelect.innerHTML = '';
      toUnitSelect.innerHTML = '';

      // Populate new options
      units.forEach(unit => {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        fromUnitSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        toUnitSelect.appendChild(option2);
      });
    }

    function convert() {
      const fromUnit = fromUnitSelect.value;
      const toUnit = toUnitSelect.value;
      const fromValue = parseFloat(fromValueInput.value);

      let result;

      if (isNaN(fromValue)) {
        result = 'Please enter a valid number.';
      } else {
        switch (unitTypeSelect.value) {
          case 'length':
            result = convertLength(fromValue, fromUnit, toUnit);
            break;
          case 'weight':
            result = convertWeight(fromValue, fromUnit, toUnit);
            break;
          case 'temperature':
            result = convertTemperature(fromValue, fromUnit, toUnit);
            break;
          default:
            break;
        }
      }

      resultDiv.textContent = result;
    }

    function convertLength(value, fromUnit, toUnit) {
      const unitConversions = {
        meter: {
          kilometer: value / 1000,
          centimeter: value * 100,
          millimeter: value * 1000,
          mile: value * 0.000621371,
          yard: value * 1.09361,
          foot: value * 3.28084,
          inch: value * 39.3701
        },
        kilometer: {
          meter: value * 1000,
          centimeter: value * 100000,
          millimeter: value * 1000000,
          mile: value * 0.621371,
          yard: value * 1093.61,
          foot: value * 3280.84,
          inch: value * 39370.1
        },
        centimeter: {
          meter: value / 100,
          kilometer: value / 100000,
          millimeter: value * 10,
          mile: value * 0.0000062137,
          yard: value * 0.0109361,
          foot: value * 0.0328084,
          inch: value * 0.393701
        },
        millimeter: {
          meter: value / 1000,
          kilometer: value / 1000000,
          centimeter: value / 10,
          mile: value * 0.00000062137,
          yard: value * 0.00109361,
          foot: value * 0.00328084,
          inch: value * 0.0393701
        },
        mile: {
          meter: value * 1609.34,
          kilometer: value * 1.60934,
          centimeter: value * 160934,
          millimeter: value * 1609340,
          yard: value * 1760,
          foot: value * 5280,
          inch: value * 63360
        },
        yard: {
          meter: value * 0.9144,
          kilometer: value * 0.0009144,
          centimeter: value * 91.44,
          millimeter: value * 914.4,
          mile: value * 0.000568182,
          foot: value * 3,
          inch: value * 36
        },
        foot: {
          meter: value * 0.3048,
          kilometer: value * 0.0003048,
          centimeter: value * 30.48,
          millimeter: value * 304.8,
          mile: value * 0.000189394,
          yard: value * 0.333333,
          inch: value * 12
        },
        inch: {
          meter: value * 0.0254,
          kilometer: value * 0.0000254,
          centimeter: value * 2.54,
          millimeter: value * 25.4,
          mile: value * 0.0000157828,
          yard: value * 0.0277778,
          foot: value * 0.0833333
        }
      };

      return unitConversions[fromUnit][toUnit].toFixed(2) + ' ' + toUnit;
    }

    function convertWeight(value, fromUnit, toUnit) {
      const unitConversions = {
        kilogram: {
          gram: value * 1000,
          milligram: value * 1000000,
          tonne: value * 0.001,
          pound: value * 2.20462,
          ounce: value * 35.274
        },
        gram: {
          kilogram: value / 1000,
          milligram: value * 1000,
          tonne: value * 0.000001,
          pound: value * 0.00220462,
          ounce: value * 0.035274
        },
        milligram: {
          kilogram: value / 1000000,
          gram: value / 1000,
          tonne: value * 0.000000001,
          pound: value * 0.00000220462,
          ounce: value * 0.000035274
        },
        tonne: {
          kilogram: value * 1000,
          gram: value * 1000000,
          milligram: value * 1000000000,
          pound: value * 2204.62,
          ounce: value * 35274
        },
        pound: {
          kilogram: value * 0.453592,
          gram: value * 453.592,
          milligram: value * 453592,
          tonne: value * 0.000453592,
          ounce: value * 16
        },
        ounce: {
          kilogram: value * 0.0283495,
          gram: value * 28.3495,
          milligram: value * 28349.5,
          tonne: value * 0.0000283495,
          pound: value * 0.0625
        }
      };

      return unitConversions[fromUnit][toUnit].toFixed(2) + ' ' + toUnit;
    }

    function convertTemperature(value, fromUnit, toUnit) {
      let result;
      if (fromUnit === toUnit) {
        result = value;
      } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (value * 9 / 5) + 32;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (value - 32) * 5 / 9;
      } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = value + 273.15;
      } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = value - 273.15;
      } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = (value + 459.67) * 5 / 9;
      } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = (value * 9 / 5) - 459.67;
      }
      return result.toFixed(2) + ' ' + toUnit;
    }
