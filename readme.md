# 💰 App de Control de Gastos Mensual

Aplicación web desarrollada en JavaScript puro para el control de finanzas personales.

Permite registrar ingresos, gastos, visualizar resumen financiero, recibir recomendaciones inteligentes y exportar información.

---

# 🚀 Funcionalidades

✔ Registro de ingreso mensual  
✔ Registro de gastos por categoría:

- Obligatorios
- Hobbies
- Gastos hormiga

✔ Visualización de movimientos (tabla)  
✔ Eliminación de gastos individuales  
✔ Cálculo automático de:

- Total de gastos
- Balance
- Porcentajes por categoría

✔ Recomendaciones automáticas (IA simulada)  
✔ Exportación a Excel (CSV)  
✔ Limpieza completa de datos

---

# 🧱 Estructura del Proyecto

APP-IA-FINANZAS/
│
├── css/
│ └── styles.css # Estilos visuales
│
├── js/
│ ├── app.js # Controlador principal (eventos y UI)
│ ├── finance.js # Cálculos financieros
│ ├── ai.js # Recomendaciones inteligentes
│ ├── storage.js # Manejo de localStorage
│ ├── export.js # Exportación a CSV
│ ├── sanitizer.js # Limpieza de datos (seguridad)
│ └── validator.js # Validaciones de entrada
│
└── index.html # Interfaz principal

---

# 🧠 Tecnologías Usadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- LocalStorage (persistencia)
- CSV (exportación)

---

# ⚙️ Cómo usar la aplicación

1. Abrir el proyecto con Live Server o navegador
2. Ingresar el ingreso mensual
3. Agregar gastos:
   - Nombre
   - Valor
   - Tipo
4. Visualizar los movimientos en la tabla
5. Consultar el resumen automático
6. Revisar recomendaciones de ahorro
7. Exportar datos a Excel si es necesario
8. Limpiar datos cuando se desee iniciar de nuevo

---

# 💡 Lógica del sistema

- Todos los datos se almacenan en el navegador (localStorage)
- Cada gasto tiene:
  - ID único
  - Fecha
  - Tipo
- El resumen se calcula dinámicamente
- Las recomendaciones se basan en porcentajes de gasto

---

# ⚠️ Limitaciones

- No usa base de datos (solo navegador)
- No tiene autenticación de usuarios
- Los datos se pierden si se limpia el navegador

---

# 🧼 Buenas prácticas implementadas

✔ Separación de responsabilidades  
✔ Código modular  
✔ Validación de datos  
✔ Simulación de IA  
✔ Optimización para bajo consumo de recursos

---

# 📊 Posibles mejoras futuras

- Integración con base de datos
- Login de usuario
- Dashboard con gráficas
- IA conectada a API real
- Versión móvil (responsive avanzado)

---

# 👨‍🏫 Uso educativo

Este proyecto es ideal para enseñar:

- Manipulación del DOM
- Eventos en JavaScript
- Estructuración de proyectos
- Persistencia de datos
- Lógica de negocio

---

# 📌 Autor

Desarrollado como proyecto de aprendizaje en desarrollo web y lógica financiera.
Deploy GitHub Pages activo
