//mostrar footer de compra ao scrollar

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 450) {
        document.getElementById("footerNav").className = 'bottomMenu show'
    } else {
        document.getElementById("footerNav").className = 'bottomMenu hide'
    }
};

window.addEventListener("scroll", myScrollFunc);