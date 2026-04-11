// Función que analiza datos financieros y da recomendación
export async function getAIRecommendation(data) {
  // Simulamos tiempo de respuesta (como si fuera IA real)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Obtenemos ingreso
  const income = data.income;

  // Si no hay ingreso, no podemos analizar
  if (income <= 0) {
    return "Ingresa primero un ingreso para obtener recomendaciones.";
  }

  // Variables acumuladoras
  let total = 0;
  let hobbies = 0;
  let hormiga = 0;

  // Recorremos gastos
  data.expenses.forEach((e) => {
    total += e.amount;

    // Clasificación
    if (e.type === "hobby") hobbies += e.amount;
    if (e.type === "hormiga") hormiga += e.amount;
  });

  // Cálculos
  const balance = income - total;
  const pTotal = (total / income) * 100;
  const pHobby = (hobbies / income) * 100;
  const pHormiga = (hormiga / income) * 100;

  // ===== LÓGICA DE RECOMENDACIÓN =====

  // Caso crítico
  if (balance < 0) {
    return "🚨 Estás gastando más de lo que ganas. Reduce gastos urgentemente.";
  }

  // Gastos muy altos
  if (pTotal > 80) {
    return "⚠️ Estás usando más del 80% de tu ingreso. Intenta ahorrar al menos un 20%.";
  }

  // Hobbies altos
  if (pHobby > 30) {
    return "🎮 Estás gastando mucho en ocio. Reduce hobbies para mejorar tu ahorro.";
  }

  // Gastos hormiga altos
  if (pHormiga > 20) {
    return "☕ Muchos gastos pequeños detectados. Controla compras innecesarias.";
  }

  // Buen manejo
  if (pTotal < 50) {
    return "✅ Buen control financiero. Podrías ahorrar o invertir.";
  }

  // Caso general
  return "Mantén un equilibrio entre gastos y ahorro.";
}
