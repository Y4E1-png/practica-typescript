function calcularEdad(fechaNacimientoTexto: string): number {
  const fechaNacimiento: Date = new Date(fechaNacimientoTexto);
  const fechaActual: Date = new Date();

  const edad: number =
    fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  return edad;
}

const fechaNacimiento: string = "2000-05-14";
const edad: number = calcularEdad(fechaNacimiento);

console.log(`La persona tiene ${edad} años.`);

