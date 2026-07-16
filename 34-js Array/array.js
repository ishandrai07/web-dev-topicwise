console.log("Topic : Array");

let arr = [1 ,4, 6, 3, 6];
console.log(arr);

console.log(arr.length);

console.log(arr[0])
console.log(arr[3])
console.log(arr[4])

// array is mutuable(changeable)
arr[0] = 7;
console.log(arr);   // 1 gets replace with 7 in array


// convert array into string
console.log(arr.toString());

// join (jha-jah commas the vha pr ` and ` aajayega)
console.log(arr.join(" and "));


//pop (take-out last element)
console.log("pop element : "+arr.pop());

//push (to add element at the end)
arr.push("ishand")
console.log(arr);

//shift (remove first element)
console.log(arr.shift());

// unshift (add element at begning)
console.log(arr.unshift(800));
console.log(arr);

// concat (add mutliple array into one)
// concat does not change the original array

let arr2 = [21, 22 ,34 ,67];
let arr3 = ["ishand" , "rai"];
let result = arr2.concat(arr3);
console.log(result);


// sort (sort the array)
let arr5 = [9,4,6,2,7,];
arr5.sort();
console.log(arr5);


// also do splice and slice with array 