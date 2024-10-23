function generateCaptcha() {
    const charsArray = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ";
    const lengthOtp = 6;
    let captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
        const index = Math.floor(Math.random() * charsArray.length);
        captcha.push(charsArray[index]);
    }
    const canv = document.getElementById("captcha");
    canv.innerHTML = captcha.join("");
}

function validateCaptcha() {
    const userInput = document.getElementById("security_code").value;
    const captchaText = document.getElementById("captcha").innerHTML;
    if (userInput === captchaText) {
        alert("Captcha Valido");
        window.location.href = "http://ula.ve/ciencias/"
    } else {
        alert("Captcha Invalido, Intente nuevamente.");
        generateCaptcha();
    }
}

window.onload = function() {
    generateCaptcha();
};
