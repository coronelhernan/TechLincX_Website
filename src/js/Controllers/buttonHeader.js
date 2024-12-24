const d = document;
const btnMenu = d.getElementById('btn-menu');
const menu = d.getElementById('menu');
const menuLinks = menu ? menu.querySelectorAll('a') : [];

// Verificar si el botón de menú y el menú están disponibles
if (btnMenu && menu) {
  // Logica para activar y desactivar la visibilidad del menú
  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('translate-x-full'); 
  });
}

// Cerrar el menú cuando se haga clic en un enlace dentro del menú
if (menuLinks.length > 0) {
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Agregar la clase para ocultar el menú
      menu.classList.add('translate-x-full');
    });
  });
}