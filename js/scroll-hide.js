//mostrar footer de compra ao scrollar

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 450) {
        document.getElementById("footerNav").className = 'bottomMenu show'
        document.getElementById("myBtn").style.bottom = "18%"
    } else {
        document.getElementById("footerNav").className = 'bottomMenu hide'
        document.getElementById("myBtn").style.bottom = "5%"
    }
};

window.addEventListener("scroll", myScrollFunc);