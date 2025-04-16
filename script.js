document.addEventListener('DOMContentLoaded', function () {
  const menuOpciones = document.querySelector(".menu-opciones");
  const btnMenu = document.querySelector("#btn-menu");

  btnMenu.addEventListener("click", () => {
    menuOpciones.classList.toggle("mostrar");

    // Alternar ícono (opcional)
    btnMenu.setAttribute(
      "name",
      menuOpciones.classList.contains("mostrar") ? "close-outline" : "menu-outline"
    );
  });
});
