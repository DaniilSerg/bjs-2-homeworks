"use strict"
function solveEquation(a, b, c) {
    let arr = [];
    let d;
    let k;
    d = b**-4*a*c;
    if (d === 0) {
       k = -b/(2*a);
       arr.push(k);
    } else if (d > 0) {
       k = (-b + Math.sqrt(d) )/(2*a);
       arr.push(k);
       k = (-b - Math.sqrt(d) )/(2*a);
       arr.push(k);
    }
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
