
# Unit Converter

A simple web-based tool that allows users to convert between different units of measurement, including length, weight, and temperature.

## Demo
You can try the Unit Converter live at: [https://unit-converter-tool.netlify.app](https://unit-converter-tool.netlify.app)

## Features
- Convert between various units of length (meter, kilometer, centimeter, millimeter, mile, yard, foot, inch)
- Convert between various units of weight (kilogram, gram, milligram, tonne, pound, ounce)
- Convert between various units of temperature (celsius, fahrenheit, kelvin)
- Seamless switching between different unit types

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Use
1. Select the unit type you want to convert (length, weight, or temperature).
2. Enter the value you want to convert in the "Enter value to convert" input field.
3. Select the "From" unit and the "To" unit from the respective dropdown menus.
4. Click the "Convert" button to see the converted value.

## Code Explanation
The code consists of an HTML structure, a CSS stylesheet, and a JavaScript file that handles the unit conversion functionality.

### HTML Structure
The HTML file sets up the basic structure of the webpage, including:
- A container div to hold the content
- Dropdown menus to select the unit type, "From" unit, and "To" unit
- An input field to enter the value to be converted
- A button to trigger the conversion
- A container div to display the conversion result

### CSS Styling
The CSS file styles the webpage, including:
- Setting the font and background colors
- Centering the content on the page
- Styling the dropdown menus, input field, and button

### JavaScript Functionality
The JavaScript code handles the unit conversion functionality:

1. The `populateUnits()` function:
   - Populates the "From" and "To" unit dropdown menus based on the selected unit type
   - Clears the existing options and adds new ones for the selected unit type

2. The `convert()` function:
   - Retrieves the selected unit type, "From" unit, "To" unit, and input value
   - Calls the appropriate conversion function (`convertLength()`, `convertWeight()`, or `convertTemperature()`) based on the selected unit type
   - Displays the conversion result in the result container

3. The `convertLength()`, `convertWeight()`, and `convertTemperature()` functions:
   - Implement the conversion logic for each unit type using predefined conversion factors
   - Return the converted value with the appropriate unit

## Getting Started
To use the Unit Converter, simply copy the HTML, CSS, and JavaScript code provided and save them in your project directory. You can then open the HTML file in a web browser to start using the application.

## Contributions
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to open a new issue or submit a pull request on the [GitHub repository](https://github.com/ademabdrei/unit-converter.git).
