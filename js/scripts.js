
/* Input: pounds
* Processing: convert from pounds to kilograms by using kg = lb * 0.453592
* Output: pounds converted to kilograms
*/
function poundsTokilograms() {
// INPUT
let pounds = parseFloat(document.getElementById('pounds').value);

// Convert pounds into kilograms.
let kilograms = pounds * 0.453592;

// Round kilograms to one digit after the decimal.
let digits =1;
let multiplier = Math.pow(10, digits);
kilograms = Math.round(kilograms * multiplier)/multiplier;

// Display the kilograms to the user.
document.getElementById('output').innerHTML = kilograms.toFixed(1) + ' Kilograms';
}
