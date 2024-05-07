let passwordbox = document.querySelector("#password");
let icon = document.querySelector(".fa-copy");
let btn = document.querySelector("button");
let length = 10;


let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerCase = "abcdefghijklmnopqrstuvxyz";
let number = "0123456789";
let symbol = "!@#$%&*?";


const allchrac = UpperCase + LowerCase + number + symbol;

btn.addEventListener("click", function randompass(){
    let password = "";
    password += UpperCase[Math.floor(Math.random() * password.length)];
    password += LowerCase[Math.floor(Math.random() * password.length)];
    password += number[Math.floor(Math.random() * password.length)];
    password += symbol[Math.floor(Math.random() * password.length)];

    while(length > password.length){
        password += allchrac[Math.floor(Math.random() * allchrac.length)];
        passwordbox.value = password;
    }
});

icon.addEventListener("click", function copypass(){
    
 navigator.clipboard.writeText(passwordbox.value);
    // document.execCommand("copy");
});