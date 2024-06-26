document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const age = document.getElementById('age').value.trim();
    const errorElement = document.getElementById('error');

    errorElement.textContent = '';

    if (!name || !email || !password|| !age) {
        errorElement.textContent = 'All fields are required.';
        return;
    }

    if (!validateEmail(email)) {
        errorElement.textContent = 'Invalid email format.';
        return;
    }

    if (!validatePassword(password)) {
        errorElement.textContent = 'Invalid password format.';
        return;
    }
    

    if (isNaN(age) || age < 1 || age > 80) {
        errorElement.textContent = 'Invalid age. Please enter a number between 1 and 80.';
        return;
    }

    document.getElementById('userForm').style.display = 'none';
    document.getElementById('userCard').style.display = 'block';
    document.getElementById('cardName').textContent = name;
    document.getElementById('cardEmail').textContent = email;
    document.getElementById('cardAge').textContent = age;
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
    return re.test(password);
}