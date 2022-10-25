// This block of element returns the first element with the document that matches the specified selector, group of  selectors found.
const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const a = document.querySelector("a");
const exweak = document.querySelector(".exweak");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
const container2 = document.querySelector(".container2");

let regExpeweak = /[A-Z]/;
let regExpWeak = /[a-z]/;
let regExpMedium = /[0-9]/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,;,:,+,-,=,<,>,.,',",~, ,-,(,{,},/,|,)]/;
function trigger() {
    if (input.value != "") {
        indicator.style.display = "block";
        indicator.style.display = "flex";

        // condition for the passwords
        if (input.value.length >= 1 && input.value.match(regExpeweak) || (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong)))
            no = 1;
        if (input.value.length >= 2 && ((input.value.match(regExpWeak) && input.value.match(regExpMedium))
            || (input.value.match(regExpMedium) && input.value.match(regExpStrong))
            || (input.value.match(regExpWeak) && input.value.match(regExpStrong))
            || (input.value.match(regExpWeak) && (input.value.match(regExpeweak)))))
            no = 2;
        if (input.value.length >= 2 && ((input.value.match(regExpeweak) && input.value.match(regExpMedium))
            || (input.value.match(regExpMedium) && input.value.match(regExpStrong))
            || (input.value.match(regExpeweak) && input.value.match(regExpStrong))
            || (input.value.match(regExpWeak) && (input.value.match(regExpeweak)))))
            no = 2;
        if (input.value.length >= 6 && ((input.value.match(regExpeweak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))
            || (input.value.match(regExpWeak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))
            || (input.value.match(regExpeweak) && (input.value.match(regExpWeak)) && (input.value.match(regExpStrong)))
            || (input.value.match(regExpeweak) && (input.value.match(regExpWeak)) && (input.value.match(regExpMedium)))))
            no = 3;
        if (input.value.length >= 10 && input.value.match(regExpWeak) && input.value.match(regExpeweak) && input.value.match(regExpMedium) && input.value.match(regExpStrong))
            no = 4;
        if (input.value == "India1234" || input.value == "123456" || input.value == "password" ||
            input.value == "12345" || input.value == "123456789" || input.value == "12345678" || input.value == "abc123" ||
            input.value == "qwerty" || input.value == "xxx" || input.value == "iloveyou" || input.value == "krishna" ||
            input.value == "Indya123" || input.value == "123123" || input.value == "sairam" || input.value == "omsairam" ||
            input.value == "abcd1234" || input.value == "1qaz" || input.value == "1234" || input.value == "jaimatadi" ||
            input.value == "password1" || input.value == "welcome" || input.value == "indian" || input.value == "saibaba" ||
            input.value == "654321" || input.value == "welcome123" || input.value == "linkedin" || input.value == "ganesh" ||
            input.value == "qwertyuiop" || input.value == "qwerty123" || input.value == "123" || input.value == "computer" ||
            input.value == "111111" || input.value == "passw0rd" || input.value == "987654321" || input.value == "dragon" ||
            input.value == "target123" || input.value == "monkey" || input.value == "zomato" || input.value == "asdfghjkl" ||
            input.value == "hanuman" || input.value == "password123" || input.value == "abcd1234" || input.value == "1qaz" ||
            input.value == "654321" || input.value == "asdfghjkl" || input.value == "zxcvbnm" || input.value == "asdfgh" ||
            input.value == "666666" || input.value == "hello123" || input.value == "p@ssw0rd" || input.value == "qwe123" ||
            input.value == "asdf1234" || input.value == "lovely" || input.value == "creative" || input.value == "abcdefgh" ||
            input.value == "hacker@1234" || input.value == "Hacker@1234" || input.value == "Hacker" || input.value == "hacker" ||
            input.value == "Pass@1234"
        )
            no = 5;

        // On the above conditions, the strength of password is selected
        // hence on the basis of strength we are showing the text and span of selected color
        // For that purpose, the block of code below is executed.
        if (no == 1) {
            exweak.classList.add("active");
            container2.style.display = "block";
            text.style.display = "block"; // If the passowrd is very weak, we recommend the user our password recommender.
            text.textContent = "Your password can be easily crakable!!!, Please change it ASAP, So we recommend you our password recommender below to generate new password which is much safer than others!";
            text.classList.add("exweak");
        } else {
            // as soon as user goes to another condition we change the display element.
            container2.style.display = "none";
            exweak.classList.remove("active");
            text.classList.remove("exweak");
        }
        if (no == 2) {
            exweak.classList.add("active");
            weak.classList.add("active");
            text.textContent = "Your password is quite weak, needs to be more stronger!!, So we recommend you our password recommender below to generate new password which is much safer than others!";
            text.classList.add("weak");
        } else {
            weak.classList.remove("active");
            text.classList.remove("weak");
        }
        if (no == 3) {
            exweak.classList.add("active");
            weak.classList.add("active");
            medium.classList.add("active");
            text.textContent = "The strength of password is good but for safer side make it more secure by using special characters and numbers too! Also Remeber that this password is also vulnerable but with very less chance of getting cracked!!!";
            text.classList.add("medium");
        } else {
            medium.classList.remove("active");
            text.classList.remove("medium");
        }
        if (no == 4) {
            exweak.classList.add("active");
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Nice! Your Password is now quite secured, but remeber to never share your password to anyone!!";
            text.classList.add("strong");
        } else {
            strong.classList.remove("active");
            text.classList.remove("strong");
        }
        if (no == 5) {
            // This section is specificaly designed for the Very vulnerable passwords.
            exweak.classList.add("active");
            container2.style.display = "block";
            text.style.display = "block";
            text.textContent = "Your password is highly vulnerable!!\r\nChange it immediately!!, We recommend you to refer this password recommender!";
            text.classList.add("exweak");
        }
        // The below element is used to toggle the Show and Hide button in front of the password
        showBtn.style.display = "block";
        showBtn.onclick = function () {
            if (input.type == "password") {
                input.type = "text";
                showBtn.textContent = "HIDE";
                showBtn.style.color = "#23ad5c";
            } else {
                input.type = "password";
                showBtn.textContent = "SHOW";
                showBtn.style.color = "#000";
            }
        }
    }
    else {
        indicator.style.display = "none";
        showBtn.style.display = "none";
        text.style.display = "none";
    }
}
//Javascript for the toggle generator function
container2.style.display = "none"
function onfunc() {
    if (container2.style.display !== 'none') { // if the display of generate function is display make it none or vice versa
        container2.style.display = 'none';
        a.style.backgroundColor = "green";
        a.style.border = "2px solid green";

    }
    else {
        container2.style.display = 'block';
        a.style.backgroundColor = "red";
        a.style.border = "2px solid red";
    }
}



//JavScript for Password Generator
copyIcon = document.querySelector(".input-box span"),
passwordInput = document.querySelector(".input-box input"),
generateBtn = document.querySelector(".generate-btn");

lowercase = "abcdefghijklmnopqrstuvwxyz"
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
numbers = "0123456789"
symbols = "^!$%&|[](){}:;.,* +-#@<>~"

// Here we're generating the random password using the "Math.fllor(Math.random()* ) function"
const generatePassword = () => {
    randomPassword = (uppercase[Math.floor(Math.random() * uppercase.length)]) + (lowercase[Math.floor(Math.random() * lowercase.length)]) +
        (uppercase[Math.floor(Math.random() * uppercase.length)]) + (symbols[Math.floor(Math.random() * symbols.length)]) +
        (symbols[Math.floor(Math.random() * symbols.length)]) + (lowercase[Math.floor(Math.random() * lowercase.length)]) +
        (numbers[Math.floor(Math.random() * numbers.length)]) + (uppercase[Math.floor(Math.random() * uppercase.length)]) +
        (symbols[Math.floor(Math.random() * symbols.length)]) + (lowercase[Math.floor(Math.random() * lowercase.length)]) +
        (uppercase[Math.floor(Math.random() * uppercase.length)]) + (symbols[Math.floor(Math.random() * symbols.length)]) 
    // passing randomPassword to passwordInput value
    passwordInput.value = randomPassword;
}
// Function to copy the password
const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value); // copying random password
    copyIcon.innerText = "COPIED!"; // changing copy icon to tick
    copyIcon.style.color = "#4285F4";
    setTimeout(() => { // after 1500 ms, changing tick icon back to copy
        copyIcon.innerText = "COPY";
        copyIcon.style.color = "#707070";
    }, 1500);
}
// Calling the function copypassword and generatepassword
copyIcon.addEventListener("click", copyPassword);
generateBtn.addEventListener("click", generatePassword);

// Function to displaay the text to the user once the page loads.
window.onload = function () {
    text.style.display = "block";
    text.textContent = "Insert the password manually, please do not paste it!!";
}
