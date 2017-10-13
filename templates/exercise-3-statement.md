#### 3 - Dar funcionalidad a un botón y utilizar setInterval

En el archivo `./exercises/3.js` se entrega una función en la que se debe resolver el ejercicio. En dicha función se tienen tres parámetros:
- `sourceDiv` HTMLDivElement que contiene un botón.
- `resultDiv` HTMLDivElement donde se debe añadir la solución.
- `generateRandomColor` una función que devuelve un color aleatorio.

Esta tarea consiste en:
- Clonar la tabla resultante del ejercicio 2, la cual se encuentra en un div con id `exercise-result-2`.
- Dar funcionalidad al botón, de manera que al ser presionado comience a correr un cronómetro y cada 2 segundos seleccione una fila
de la tabla al azar y cambie su propiedad `backgroundColor` utilizando la función `generateRandomColor`.
- La fila que cambia de color no puede repetirse.

**Tips**
    - Usar `addEventListener` para reconocer el click en el botón que tiene id `start-stop-button`.
    - Utilizar `cloneNode(true)` para clonar la tabla.
    - Utilizar `setInterval()` para cambiar los colores de las filas aleatoriamente.
    - Para obtener un número aleatorio entre 0 y < x, utilizar la siguiente expresión: `Math.trunc(Math.random() * x)`.
