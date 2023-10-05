let data = [5, 9, 13, 17, 45, 67, 89, 100];
let find = 100;
let start = 0;
let end = data.length - 1;
let position = undefined;
while (start <= end) {
 let mid = Math.floor((start + end) / 2);
 if (data[mid] === find) {
 position = mid;
 break;
 } else if (data[mid] < find) {
 start = mid + 1;
 } else {
 end = mid - 1;
 }
}

console.log("Element found at : "+position);
