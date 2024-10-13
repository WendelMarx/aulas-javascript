/*

Write a program to calculate the cost of a trip.

You need 3 variables, namely: 
1 - Fuel price per liter; gasolinePrice 
2 - Average fuel consumption of the car per KM; avarageSpend 
3 - Distance in KM of the trip. distance 

Print on the console the amount that will be spent to make this trip. 


toFixed is a property for rounding numeral values
*/

let gasolinePrice = 5.58;
let avarageSpend = 9;
let distance = 200;

const tripPrice = gasolinePrice / avarageSpend * distance
console.log(tripPrice.toFixed(2));

const consumption = distance / avarageSpend;
const spent = consumption * gasolinePrice;
console.log(spent);




