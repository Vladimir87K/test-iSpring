function minElArr (arr) {
  let min = arr[0];
  let indexMin = 0;
  for ( let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      indexMin = i;
    }
  }
  return indexMin;
}

function filterArr (arr) {
  let newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    // debugger
    let el = minElArr(arr);
    newArr.push(arr[el]);
    arr.splice(el, 1);
    
  }
  return newArr;
}
console.log(minElArr([3, 1, 7, 2, 8, 6]))
console.log(filterArr([3, 1, 7, 5, 4, 4, 9]))