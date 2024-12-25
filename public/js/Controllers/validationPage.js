document.addEventListener("DOMContentLoaded", () => {
  const validRoutes = [
    "/",
    "/seguridadDigital",
    "/ataquesAlDominio",
    "/documentosElectronicos",
    "/contratosInformaticos",
  ];

  const currentPath = window.location.pathname;

  if (!validRoutes.includes(currentPath)) {
    window.history.replaceState({}, "", "/404");
    window.location.href = "/404";
  }
});
