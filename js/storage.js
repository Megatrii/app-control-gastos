// Clave que usamos para guardar en el navegador
const KEY = "financeData";

// Función para obtener los datos guardados
export function getData() {
  // Intentamos obtener datos del localStorage
  const data = JSON.parse(localStorage.getItem(KEY));

  // Si no hay datos, devolvemos estructura inicial
  return (
    data || {
      income: 0, // ingreso inicial
      expenses: [], // lista vacía de gastos
    }
  );
}

// Función para guardar datos en el navegador
export function saveData(data) {
  // Convertimos el objeto a texto (JSON)
  const json = JSON.stringify(data);

  // Guardamos en localStorage
  localStorage.setItem(KEY, json);
}

// Limpiar todos los datos
export function clearData() {
    localStorage.removeItem("financeData");
}