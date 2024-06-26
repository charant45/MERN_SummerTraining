// const showResult = (res) => {
//     console.log(res);
//     const root = document.getElementById("root")
//     root.innerHTML = res;
// }
// const sum = (res) => {
//     const res = a + b;
//     showResult(res);
// }

// const mul = (res) => {
//     const res = a * b;
//     showResult(res);
// }

// function paywithRazopay() {
//     console.log("payment processing on Razopay...");
// }

// function paywithPaytm() {
//     console.log("payment processing on Paytm...");
// }

// const userDetails = (name, age, seat, processpayment) => {
//     console.log(
//         `Booking for ${name} whose age is ${age}`
//     );

//     if(true) {
//         processpayment();
//     }
//     else{
//         console.log("payment failed");
//     }
// }

// userDetails('charan',21,'SL',paywithRazopay);

const arr = [10,20,30];

console.log(arr);
arr.shift();
console.log(arr);

const arr1 = ["Fruits","Apple","Mango"]

const printvalues = (a,b,c) => {
    console.log('value is:',a);
    console.log('index is:',b);
    console.log('array is:',c);
    console.log('==========');
}

for(let i=0; i<arr1.length; i++){
    printvalues(arr[i],i,arr);
}

const bio = [10,20,30]
let sum = 0;
bio.forEach((a,b,c) => {
    sum+=b;
});

console.log(sum);
