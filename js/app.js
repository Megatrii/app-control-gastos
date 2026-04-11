// Importamos funciones para manejar datos
import { getData, saveData } from "./storage.js";
import { calculateSummary } from "./finance.js";
import { getAIRecommendation } from "./ai.js";
import { exportToCSV } from "./export.js";
import { clearData } from "./storage.js";

// ===== REFERENCIAS DEL HTML =====

// Input del ingreso
const incomeInput = document.getElementById("income");

// Botón para guardar ingreso
const saveIncomeBtn = document.getElementById("saveIncome");

// Inputs de gastos
const nameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("expenseAmount");
const typeInput = document.getElementById("expenseType");

// Botón para agregar gasto
const addExpenseBtn = document.getElementById("addExpense");

// Elemento donde mostramos resumen
const summary = document.getElementById("summary");
//recomendación de IA
const recommendation = document.getElementById("recommendation");
//exportar excel
const exportBtn = document.getElementById("exportBtn");
// limpiar datos formulario
const clearBtn = document.getElementById("clearBtn");

//tabla movimientos
const movementsTable = document.getElementById("movementsTable");

// ===== EVENTO: GUARDAR INGRESO =====
saveIncomeBtn.addEventListener("click", () => {
  // Obtenemos datos actuales
  const data = getData();

  // Convertimos el valor a número y lo guardamos
  data.income = Number(incomeInput.value);

  // Guardamos en localStorage
  saveData(data);

  // Actualizamos la interfaz
  render();
});

//función que exporta los datos a excel
exportBtn.addEventListener("click", () => {
  const data = getData();

  exportToCSV(data);
});

// ===== EVENTO: AGREGAR GASTO =====
addExpenseBtn.addEventListener("click", () => {
  // Obtenemos datos actuales
  const data = getData();

  // ===== EVENTO: limpiar gastos GASTO =====
  clearBtn.addEventListener("click", () => {
    // Confirmación para evitar borrados accidentales
    const confirmDelete = confirm("¿Seguro que deseas borrar todos los datos?");

    if (!confirmDelete) return;

    clearData();

    render();
  });

  // Creamos objeto gasto
  const expense = {
    id: Date.now(), // identificador único
    name: nameInput.value,
    amount: Number(amountInput.value),
    type: typeInput.value,
    date: new Date().toLocaleDateString(), // fecha actual
  };

  // Agregamos el gasto al arreglo
  data.expenses.push(expense);

  // Guardamos los cambios
  saveData(data);

  // Actualizamos interfaz
  render();
});
// funcion para renderizar tabla
function renderTable(data) {
  // Limpiar tabla
  movementsTable.innerHTML = "";

  // Recorrer gastos
  data.expenses.forEach((exp) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${exp.date}</td>
            <td>${exp.name}</td>
            <td>${exp.type}</td>
            <td>${exp.amount}</td>
            <td>
                <button onclick="deleteExpense(${exp.id})">Eliminar</button>
            </td>
        `;

    movementsTable.appendChild(row);
  });
}

window.deleteExpense = function (id) {
  const data = getData();

  // Filtrar eliminando el elemento
  data.expenses = data.expenses.filter((e) => e.id !== id);

  saveData(data);

  render();
};

function render() {
  // Obtener datos
  const data = getData();

  // Usar módulo financiero
  const summaryData = calculateSummary(data);

  // Mostrar resumen
  summary.textContent = `
Ingreso: ${data.income}

Gastos Totales: ${summaryData.totalExpenses}

Balance: ${summaryData.balance}

--- Detalle ---
Obligatorios: ${summaryData.obligatorios} (${summaryData.percentages.obligatorios.toFixed(1)}%)
Hobbies: ${summaryData.hobbies} (${summaryData.percentages.hobbies.toFixed(1)}%)
Hormiga: ${summaryData.hormiga} (${summaryData.percentages.hormiga.toFixed(1)}%)
`;

  // IA
  getAIRecommendation(data).then((result) => {
    recommendation.textContent = result;
  });

  renderTable(data);
}
