export function sanitizeInput(input) {
  // Validación básica
  if (typeof input !== "string") return "";

  // Prevención de XSS (inyección de scripts)
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
}
