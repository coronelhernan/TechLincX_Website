document.addEventListener("DOMContentLoaded", () => {
  const validRoutes = [
    "/",
    "/seguridadDigital",
    "/ataquesAlDominio",
    "/documentosElectronicos",
    "/contratosInformaticos"
  ];

  const currentPath = window.location.pathname;

  if (!validRoutes.includes(currentPath)) {
    // Redirigir a la pagina 404 si no existe una pagina 
    window.history.replaceState({}, "", "/404");
    window.location.href = "/404";
  }
});