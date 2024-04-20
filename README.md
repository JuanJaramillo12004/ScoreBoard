# ScoreBoard
*Members:* 
- Juan Eduardo Jaramillo - 2221274
- Ludy Astrid Agudelo Bravo - 2221008
- Alejandro Bravo Isajar - 2220332

# Complejidad calcularScoreBoard:

El método calcularScoreBoard tiene una complejidad de tiempo de *O(n log n)*. Aquí está el desglose:

*caso.split(";")*: Esto tiene una complejidad de tiempo de *O(n)*, donde n es la longitud de la cadena de entrada.

*forEach*: Esto también tiene una complejidad de tiempo de *O(n)*, donde n es el número de elementos en el array resultante del split.

*tArea.value.split('\n').sort(...)*: La función sort de JavaScript tiene una complejidad de tiempo de *O(n log n)* en el peor de los casos, donde n es el número de líneas en tArea.value.

*join('\n').trim()*: Estas operaciones tienen una complejidad de tiempo de *O(n)*, donde n es la longitud de la cadena resultante.

Por lo tanto, la complejidad de tiempo total es dominada por la operación de ordenación, lo que hace que la complejidad de tiempo total sea *O(n log n)*.