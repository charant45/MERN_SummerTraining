// const s2 = document.getElementsByTagName('section');
// const secondSection = s2[1];
// const title = secondSection.getElementsByTagName('h4');
// title[0].innerText = "JS Callbacks"

// const title = 
//              document.
//              getElementsByTagName('section')
//              [1].
//              getElementsByTagName('h4');
// title[0].innerText = "JS Callbacks 123";

// const title = document.querySelector("section:last-of-type > h4");
// title.style.color = 'brown';
// title.className = 'cs1';

// const pr = document.createElement("p");
// pr.innerText = 'New line for DOM';
// const sec = document.getElementsByTagName('section')[0];

// sec.appendChild(pr);

function PrintHello() {
    console.log('Hello.....')
}

// function inputClicked() {
//     console.log('inputClicked..')
// }

function inputKeydown(e) {
    console.log('inputKeydown.....');
    console.log(e.target.value);
}

function inputchanged() {
    console.log('inputchanged(.....');
    console.log(e.target.value);
}
