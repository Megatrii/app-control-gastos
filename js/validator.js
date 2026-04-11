import { sanitizeInput } from "./sanitizer.js";

export function validateUserData(name, email) {
  const cleanName = sanitizeInput(name);
  const cleanEmail = sanitizeInput(email);

  // Validar nombre
  if (cleanName.length < 3) {
    return { valid: false, message: "Nombre muy corto" };
  }

  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(cleanEmail)) {
    return { valid: false, message: "Correo inválido" };
  }

  return {
    valid: true,
    data: {
      name: cleanName,
      email: cleanEmail,
    },
  };
}
