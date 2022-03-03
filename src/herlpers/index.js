export const generateId = () => {
    const random = Math.random().toString(23)
    const fecha = Date.now().toString(10);
    return random + fecha
  }