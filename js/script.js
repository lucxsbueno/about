
var btn = document.getElementById("btn");

var active = false;

btn.addEventListener("click", () => {
    if (active) {
        document.getElementById("menu").style.display = "none";
        btn.innerHTML = "";
        btn.innerHTML = "menu";
        active = false;
    } else {
        document.getElementById("menu").style.display = "block";
        btn.innerHTML = "";
        btn.innerHTML = "close";
        active = true;
    }
});

/*    -------------------------------------------------------------    */

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ['Lucas Bueno.', 'UX designer.', 'desenvolvedor web.', 'desenvolvedor front-end.', 'programador Java.', 'mais um programador viciado em café! :D'];
const typingDelay = 100;
const erasingDelay = 75;
const newTextDelay = 3000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

/*    -------------------------------------------------------------    */

const btnLeiaMais = document.getElementById("btnLeiaMais");
let aberto = false;

btnLeiaMais.addEventListener("click", function abrirTexto(el) {
    if (!aberto) {
        document.getElementById("pontos").style.display = "none";
        document.getElementById("lerMais").style.display = "block";
        btnLeiaMais.innerHTML = "Leia menos";
        aberto = true;
    } else {
        document.getElementById("lerMais").style.display = "none";
        document.getElementById("pontos").style.display = "inline-block";
        btnLeiaMais.innerHTML = "Leia mais";
        aberto = false;
    }
});