## Controles

Llamamos controles (porque "controlan" como funciona el formulario) a **todos los componentes** que forman parte de un Formulario Grip. Dentro de estos tenemos varios grupos:

1. Entrada/salida (Fields): su objetivo es permitir el ingreso de un valor (o de varios) o mostrar un valor existente. Siempre están vinculados a un dato especifico. Casos: 

   - Texto, Ok - input/keyb
   - Numero, Ok - input/keyb
   - Fecha, - input/keyb/widget
   - Hora, - input/keyb/widget
   - Tildar, - widget
   - Opciones, - widget
   - Item, - widget
   - QR, - widget
   - Fotos, -widget
   - Adjuntos, -widget
   - Gps, - widget
   - Gráfico. - widget

3. Cálculos: su objetivo es generar un valor a partir de un conjunto de valores existentes en el formulario. Siempre están vinculados a un dato especifico que contiene su resultado. No permiten modificar el valor generado. Casos: 

  - Calculado,

  - Stock.

7. Visibilidad: su objetivo es mostrar u ocultar campos o secciones en base a ciertos valores existentes en el formulario. Tambien podrían habilitar/deshabilitar campos de entrada. Casos: Mostrar Seccion, Mostrar Campos, Opciones particulares.

8. Asignaciones: su objetivo es copiar valores a ciertos controles a partir de cambios en los valores de otros controles. Casos: Copiar Campo (Nuevo !), Copiar Columnas, Copiar Filas (antes Filtrar las filas).

9. Acciones: su objetivo es realizar cierta acciones frente a un cambio. Casos: Ticket, Alerta, Solicitud, Fusión PDF,Actualizar Lista.

**Grip only Controls**

NOT included en Stylo-Kit

~~~
    // This are Grip only controls
    // Action fields (plugins)
    // { title: 'CalculatedField', component: null },
    // { title: 'TicketPlugin', component: null },
    // { title: 'AlertPlugin', component: null },
    // { title: 'ServiceCallPlugin', component: null },
    // { title: 'LocalStockPlugin', component: null },
    // { title: 'UpdateListPlugin', component: null },
    // { title: 'PdfFusionPlugin', component: null },
~~