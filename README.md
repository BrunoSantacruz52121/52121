# Analizador Sintáctico con ANTLR4 + Node.js

Este proyecto implementa un analizador léxico y sintáctico para una gramática lógica booleana en notación EBNF, usando ANTLR4 y JavaScript.

## Requisitos

- Node.js instalado
- Java JDK 11 (mínimo)
- ANTLR 4.13.2 (archivo `.jar` descargado)

CASOS DE PRUEBA 
Ejemplos válidos
input1.txt: (p ∨ q) ∧ ¬r → s

input2.txt: ( p ∨ s ) ∧ (q → e)

Ejemplos inválidos
input_error1.txt: ? → s

input_error2.txt: ( p → → ) ¬ s

🧾 SALIDA ESPERADA
El analizador realiza:

Análisis léxico
Muestra una tabla con tokens y lexemas reconocidos.

Análisis sintáctico
Muestra el árbol de derivación en formato texto.

Verificación de errores
Informa línea y causa si se detectan errores de sintaxis.