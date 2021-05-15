//botão d voltar ao topo
var mybutton = document.getElementById("myBtn");

// mostrar o botão ao rolar
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// voltar ao topo da página quando clicar
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}