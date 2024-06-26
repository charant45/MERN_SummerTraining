// console.log("start");

// function abc(x) {
//     console.log(x^2);
//     temp(x/2);
// }
// abc(8);
// console.log("mid");
// function temp(x){
//     console.log(x/2);
// }

// console.log("End");


// function xyz() {
//     console.log('Inside the xyz');
//     function temp(x) {
//         console.log(x*x);
        
//     }
//     console.log('End');
//     temp(12);
// }

// console.log('start');
// xyz();

// const button = document.getElementsByTagName('button')[0];

// button.addEventListener('click', () => {
//     console.log('clicked');
// });

// const pr = fetch('https://api.github.com/users/charant45');

// pr.then((res) => {
//     const pr2 = res.json();

//     pr2.then((data)=> {
//         console.log(data);
//     })
// }).catch((e) => {
//     console.log('Fetch -',e);
// })

const root = document.getElementById('root');

const request = fetch('https://dummyjson.com/products');

request.then((result) => {
    const convertData = result.json();

    convertData.then(renderUI);
          
}).catch((error) => {
    console.log(error);
});


const renderUI = data=> {
    const products = data.products;
    for(let i=0; i<products.length;i++){
        root.append(`${products[i].title} \n`);
    }
    
}
