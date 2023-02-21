const arr = [10, 3, 25, 15, 78, 35, 72, 90, 70];

function sortArr(arr) {
  if(arr.length < 1) return arr;

  let index = Math.floor(arr.length / 2);

  let less = [];
  let more = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === index) continue;
    if (arr[i] < arr[index]) less.push(arr[i]);
    else more.push(arr[i]);
  }
  return [...sortArr(less), arr[index], ...sortArr(more)];
}

console.log(sortArr(arr))