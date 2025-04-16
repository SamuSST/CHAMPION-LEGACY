document.addEventListener('DOMContentLoaded', function () {
    const menuOpciones = document.querySelector(".menu-opciones");
    const btnMenu = document.querySelector("#btn-menu");
  
    btnMenu.addEventListener("click", () => {
      menuOpciones.classList.toggle("mostrar");
  
      // Cambiar icono
      if (menuOpciones.classList.contains("mostrar")) {
        btnMenu.setAttribute("name", "close-outline");
      } else {
        btnMenu.setAttribute("name", "menu-outline");
      }
    });
  
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.menu-opciones a').forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 865) {
          menuOpciones.classList.remove("mostrar");
          btnMenu.setAttribute("name", "menu-outline");
        }
      });
    });
  
    window.addEventListener("resize", () => {
      if (window.innerWidth > 865 && menuOpciones.classList.contains("mostrar")) {
        menuOpciones.classList.remove("mostrar");
        btnMenu.setAttribute("name", "menu-outline");
      }
    });
  });
  