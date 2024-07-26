function openbtn() {
    let head = document.getElementById("h2");
    head.style.display = "none";
}

function closebtn() {
    head = document.getElementById("h2");
    head.style.display = "block";
}

let a = 40;
let c = a>20 && a<100;
console.log(c);
c = a<20 || a<100;
console.log(c);
c = !(a<20 || a<100);
console.log(c);

//bitwise operator
//bitwise and
let q = 10; //1010
let w = 9; //1001
console.log(q&w); //1000

q = 15; //1111
w = 14; //1101
console.log(q&w); //1101

//bitwise or
let q1 = 15;
let w1 = 14;
console.log(q1|w1);

let d = 19; //10011
let e = 21; //10101
console.log(d|e); //10111
console.log(d&e); //10001

//bitwise xor
console.log(d^e); //00111

d = 13; //01101
e = 16; //10000
console.log(d^e); //11101

//shift operator
//left shift operator <<
console.log(d<<1) //1101 ---> 11010

d = 9;
console.log(d<<3); //1001 ---> 1001000

//right shift operator >>
console.log(d>>1); //1001 ---> 100

d = 15;
console.log(d>>2); //1111 ---> 11

let f = document.getElementById("first");
let s = document.getElementById("second");
let head = document.getElementById("h2")

function addnum() {

let num1 = parseInt(f.value);
let num2 = parseInt(s.value);
   let sum = num1 + num2;
   head.innerHTML = `sum is ${sum}`;
}