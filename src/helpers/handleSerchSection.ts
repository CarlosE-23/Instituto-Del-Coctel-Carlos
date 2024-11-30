export default function handleSearchSection(e: React.MouseEvent) {
  e.preventDefault();
  const direccion = e.currentTarget.getAttribute("data-direction");
  if (!direccion) return;
  const elemento = document.getElementById(direccion);
  if (!elemento) return;
  const top =
    elemento.getBoundingClientRect().top +
    document.documentElement.scrollTop -
    100; //Posicion relativa a la ventana
  window.scroll({ top });
}
