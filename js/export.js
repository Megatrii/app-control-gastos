// Función para exportar datos a CSV
export function exportToCSV(data) {
  // Encabezados del archivo
  let csv = "Tipo,Nombre,Valor\n";

  // Recorremos gastos
  data.expenses.forEach((e) => {
    // Construimos filas
    csv += `${e.type},${e.name},${e.amount}\n`;
  });

  // Crear archivo tipo blob
  const blob = new Blob([csv], { type: "text/csv" });

  // Crear enlace temporal
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "gastos.csv";

  // Simular click
  a.click();

  // Liberar memoria
  URL.revokeObjectURL(url);
}
