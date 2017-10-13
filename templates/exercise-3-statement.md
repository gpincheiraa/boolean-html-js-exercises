#### 3 - Dar funcionalidad a un botón y utilizar setInterval

En el archivo `./exercises/3.js` se entrega una función en la que se debe resolver el ejercicio. En dicha función se tienen tres parámetros:
- `sourceDiv` HTMLDivElement que contiene un botón.
- `resultDiv` HTMLDivElement donde se debe añadir la solución.
- `generateRandomColor` una función que devuelve un color aleatorio.

Esta tarea consiste en:
- Clonar la tabla resultante del ejercicio 2, la cual se encuentra en un div con Id `exercise-result-2`.
- Dar funcionalidad al botón, de manera que al ser presionado haga cambiar aleatoriamente cada 2 segundos tanto el color como la fila que está afectando. Además se debe cambiar el texto del botón a Detener y al presionar el botón con texto Detener debe dejar de hacer cambios en la tabla.

**Tip 1:** Usar `addEventListener` para reconocer el click en el botón.

**Tip 2:** Utilizar `cloneNode(true)` para clonar la tabla.

**Tip 3:** Utilizar `setInterval()` para cambiar los colores de las filas aleatoriamente.

**Tip 4:** Para obtener un número aleatorio entre 0 y < x, utilizar la siguiente expresión: `Math.trunc(Math.random() * x)`.
