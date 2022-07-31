//1
let  user = {
   firstname:'giorgi',
   lastname: 'smith',
   age: 25,
    studentstatus: 'active'
}; {
console.log (user.studentstatus); }


 //2
var numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i]>5) {
   console.log(numbers[i]);
}
}

//3
var user = {
name: "giorgi",
age:  20,
studentstatus: "active"
}
  if (user.age < 18 && user.studentstatus == 'active') {
    console.log ('hello');
} else if (user.name == 'levan') {
    console.log ('hello giorgi');
}else if (user.studentstatus == 'active' || user.age < 25) {
    console.log ('hello world');
}else {
    console.log (error);
}

//4
var array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ] ;
for (var item of array) {
   if (typeof item == 'string') {
console.log (item);
}
}
//5
var array = [32, 10, 'hello', null, 'hello2', 50]
for (var item of array) {
   if ( item % 5 == 0 && typeof item == 'Number') {
        console.log (item);
    }
}

//6
var array = [ 2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10 ];

for (let x of array) {
     if (x % 2 == 0) {
         console.log(x);
     }
 }

 //7
 var array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];

 for (let i = 0; i < array.length; i++) {
     const numbers = array[i];

    for (let x = 0; x < numbers.length; x++) {
         const positive = numbers[x]; 
        if (positive > 0) {
            console.log(positive);
         }       
     }
}