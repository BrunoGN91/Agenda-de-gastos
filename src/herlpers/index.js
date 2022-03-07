export const generateId = () => {
    const random = Math.random().toString(23)
    const fecha = Date.now().toString(10);
    return random + fecha
  }

export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: "2-digit",
  };

  return fechaNueva.toLocaleDateString('es-ES', opciones)
}