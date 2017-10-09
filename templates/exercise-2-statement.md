#### 2 - Crear dinámicamente una tabla a partir de datos en formato JSON

En el archivo `./exercises/2`.js se entrega una función en la que debe resolver el ejercicio. En dicha función se tienen dos parámetros, `sourceDiv` que contiene un array de objetos en formato JSON y `resultDiv` para entregar la solución. La tarea consiste en dibujar una tabla basada en los datos que contiene el JSON en `sourceDiv`, utilizando la etiqueta `<table>`, `<thead>` y `<th>` para los headers, y `<tbody>`, `<tr>` y `<td>`  para las columnas y filas con el contenido.

**Tip 1:** Utilizar `JSON.parse()` para transformar el texto en el div `sourceDiv` en un objeto.

**Tip 2:** Usar `Object.keys` para obtener las keys de cada objeto y que servirán de título para las columnas.
