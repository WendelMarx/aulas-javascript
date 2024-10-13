let variavel = 10;


const pi = 3.14;

console.log(variavel);


/* 

Write a program to calculate the cost of a trip.

    I have 3 variables. Being them: 
    1 - Fuel price; (Value used 6.02 per liter)
    2 - Average fuel consumption of the car per KM; (The motorcycle is a Duke KTM 390 and it averages 22km/l)
    3 - Distance in KM of the trip. (The trip is from Santa Luzia to Piedade dos Gerais, which is 138 km)

*/

let fuelPrice = 6.02;
let averageSpend = 22;
let distance = 138;

let expense = (fuelPrice / averageSpend) * distance;

console.log(expense.toFixed(2))

/* Result:
37.76

*/