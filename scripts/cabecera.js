window.onscroll = function() {
    var navbar = document.getElementById("cont-barra");
    var altura = document.getElementById("cont-cabecera");
    var alturahome = document.getElementById("cont-home");
    if (window.scrollY > (altura.offsetHeight + 35)) {
      navbar.classList.add("fixed-top");
      navbar.classList.add("mt-0");
      alturahome.style.marginTop = ((navbar.offsetHeight)+10) + "px";
    } else {
      navbar.classList.remove("fixed-top");
      navbar.classList.remove("mt-0");
      alturahome.style.marginTop = 0;
    }
  };
  