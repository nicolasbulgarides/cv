// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let temperatureArray = new Array('17', '21', '23', '25');
let i = 0;
console.log('Length of array: ' + temperatureArray.length);
function tempFunction(array) {
  while (i < array.length) {
    console.log(`Temperature of ${array[i]} on day ${i + 1}`);

    i++;
  }
}

tempFunction(temperatureArray);
