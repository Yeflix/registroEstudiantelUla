let captchaCode = generateCaptcha(); // Generar el CAPTCHA inicial
drawCaptchaImage(captchaCode);

function generateCaptcha() {
    const alphabets = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789";
    let captchaCode = "";
    for (let i = 0; i < 6; i++) {
        captchaCode += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    }
    return captchaCode;
}

function drawCaptchaImage(captchaCode) {
    const canvas = document.getElementById("captcha-canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "28px 'Times new roman Black', sans-serif"; // Cambiar la fuente
    ctx.fillStyle = "#333"; // Color de texto
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Agregar sombra
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 4;

    // Dibujar texto ondulado
    for (let i = 0; i < captchaCode.length; i++) {
        const char = captchaCode[i];
        const offsetY = Math.sin(i + Date.now() / 100) * 10; // Efecto ondulado
        ctx.fillText(char, canvas.width / 3 + (i * 20) - 30, canvas.height / 2 + offsetY); // Ajustar posición
    }
}

function validateCaptcha() {
    const userInput = document.getElementById("captcha-input").value;
    if (userInput === captchaCode) {
        alert("Código CAPTCHA correcto!");
        window.location.href = "http://ula.ve/ciencias/";
    } else {
        alert("Código CAPTCHA incorrecto. Intente de nuevo.");
        captchaCode = generateCaptcha(); // Generar un nuevo CAPTCHA
        drawCaptchaImage(captchaCode); // Dibujar el nuevo CAPTCHA
        document.getElementById("captcha-input").value = ""; // Limpiar el campo de entrada
    }
}
function cambia_estilo(Obj,n) {
    var t_mensaje = Obj.value;
    switch (n) {
    	case 0:
        {
	    Obj.style.background='#D4D0C8';
            Obj.style.color='#000066';
            break;
        }
        case 1:
        {
            Obj.style.background='#000066';
            Obj.style.color='#FFFFFF';
            break;
        }
    }
    window.status = t_mensaje;
	return true;
}
