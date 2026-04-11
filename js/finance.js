// ===== FUNCIÓN PRINCIPAL DE CÁLCULO =====
export function calculateSummary(data) {
  // Inicializamos acumuladores
  let totalExpenses = 0;

  let obligatorios = 0;
  let hobbies = 0;
  let hormiga = 0;

  // Recorremos gastos
  data.expenses.forEach((e) => {
    totalExpenses += e.amount;

    // Clasificación por tipo
    if (e.type === "obligatorio") obligatorios += e.amount;
    if (e.type === "hobby") hobbies += e.amount;
    if (e.type === "hormiga") hormiga += e.amount;
  });

  // Evitar división por cero
  const income = data.income || 1;

  // Cálculos principales
  const balance = data.income - totalExpenses;

  const percentages = {
    obligatorios: (obligatorios / income) * 100,
    hobbies: (hobbies / income) * 100,
    hormiga: (hormiga / income) * 100,
    total: (totalExpenses / income) * 100,
  };

  // Retornamos TODO organizado
  return {
    totalExpenses,
    balance,
    obligatorios,
    hobbies,
    hormiga,
    percentages,
  };
}
