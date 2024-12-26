const d = document;
const containLogo = d.getElementById('contain-logo');
const btnMenu = d.getElementById('btn-menu');
const menu = d.getElementById('menu');
const menuIcon = d.getElementById('icon-btn');
const menuLinks = menu ? menu.querySelectorAll('a') : [];

// Verificar si el botón de menú y el menú están disponibles
if (btnMenu && menu) {
  // Lógica para activar y desactivar la visibilidad del menú y alternar el ícono
  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('translate-x-full');
    if (menuIcon.classList.contains('fa-bars')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
      containLogo.classList.add('hidden-element');
    } else {
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
      containLogo.classList.remove('hidden-element')
    }
  });
}

// Cerrar el menú cuando se haga clic en un enlace dentro del menú
if (menuLinks.length > 0) {
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Agregar la clase para ocultar el menú
      menu.classList.add('translate-x-full');
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    });
  });
}