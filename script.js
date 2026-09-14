/*JavaScript basico basic #easy bleep feito por mim :p*/
function myFunction() {
  document.getElementById("demo").innerHTML = "Parabéns, vc perdeu 1 segundo da sua vida com isso ❤";
}

/*Funcionalidade Extra - IA*/
const botaoTema = document.querySelector(".tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("modo-noturno");

    if (document.body.classList.contains("modo-noturno")) {
        botaoTema.innerHTML = "☀️ Modo normal";
    } else {
        botaoTema.innerHTML = "🌙 Modo noturno";
    }
});

