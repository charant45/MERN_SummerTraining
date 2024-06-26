// function handleUserName(e) {
//     console.log("Name:", e.target.value);
// }

// function handleUserAge(e) {
//     console.log("Age:", e.target.value);
// }

// function handleSubmitted(e) {
//     e.preventDefault();
//     // console.dir( e.target);

//     const UserName = e.target[0].value;
//     const UserAge = e.target[1].value;
    
//     console.log(UserName, UserAge);

//     if(age>30){
//         alert("Age should be less than 30");
//     }
//     else {
//         alert("Submitted");
//     }
// }

const handleSubmit = (e) => {
    e.preventDefault();
    const arr = e.target;
    const name = arr[0].value;
    const email = arr[1].value;

    const form = document.getElementsByTagName("form")[0];
    renderCard(name,email);
}

const renderCard = () => {
    const root = document.getElementById("root");
    root.setAttribute('class','card');

    root.innerHTML= `
        <h3 class='name'>Name is: $(n)</h3>
        <h3 class='email'>Email is: $(e)</h3>
    `;
}