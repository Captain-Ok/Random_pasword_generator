document.getElementById("btn").addEventListener("click", function() {
    const length = parseInt(document.getElementById("length").value);
    const upper = document.getElementById("uppercase").checked;
    const lower = document.getElementById("lowercase").checked;
    const num = document.getElementById("numbers").checked;
    const sym = document.getElementById("symbols").checked;


    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let character = "";
    if(upper) character += uppercaseLetters;
    if(lower) character += lowercaseLetters;
    if(num) character += numbers;
    if(sym) character += symbols;

    if (character.length === 0) {
        alert('Please select at least one character type.');
        return;
    }

    if(length === 0){
        alert("Please increase length to minimum you want ");
    }

    let password = "";
    for(let i = 0; i<length; i++){
        const random = Math.floor(Math.random() * character.length);
        password += character[random];
    }

    document.getElementById("Output").innerText = password;
})