"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d;
  let k;
  d = Math.pow(b,2)-4*a*c;
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
  let P = percent / 1200;
  let S = amount - contribution;
  let op;
  if(isNaN(percent)) {
    return false;
  } else if(isNaN(contribution)) {
    return false;
  } else if(isNaN(amount)) {
    return false;
  } else if(isNaN(countMonths)) {
    return false;
  } else {
    op = +(countMonths * S * (P + (P / (Math.pow((1 + P),countMonths) - 1)))).toFixed(2);
    return op;
  }
}
