function getArrayParams(...arr) {
  console.log(...arr);
  let min = Infinity;
  let max = -Infinity;
  let sum;
  let avg;
  if (arr.length == 0) {
    return 0;
  } else {
    min = Math.min(...arr);
    max = Math.max(...arr);
    sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    avg = +(sum / arr.length).toFixed(2);
    return { min: min, max: max, avg: avg };
  }
}

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    let sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    let dif = Math.max(...arr) - Math.min(...arr);
    return dif;
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    let dif;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
      } else {
          sumOddElement += arr[i];
      }
    }
    dif = sumEvenElement - sumOddElement;
    return dif;
  }
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    let avg;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    avg = sumEvenElement / countEvenElement;
    return avg;
  }
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
