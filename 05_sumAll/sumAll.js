const sumAll = function(x, y) {
  let minNum = Math.min(x, y)
  let maxNum = Math.max(x, y)
  let sumaTotal = 0;
  
  if (x < 0 || y < 0 || typeof x  != "number" || typeof y  != "number") {
    sumaTotal = "ERROR"
  }

  else for (i = minNum; i <= maxNum; i++) {
    sumaTotal += i;
  }
  return sumaTotal 
  }
// Do not edit below this line
module.exports = sumAll;
