# Ejercicios introductorios en el terminal:
1. **Ejercicio de Listar Contenido:** Utiliza el comando "ls" para listar el contenido
del directorio actual.
    `→ Solución: ls + intro`
<br>
2. **Ejercicio de Directorio Actual:** Usa el comando "pwd" para mostrar el directorio actual en el que te encuentras.
    `→ Solución: pwd + intro`
<br>
3. **Ejercicio de Copiar un Archivo:** Crea un archivo de texto llamado "archivo.txt" en el directorio actual. Copia el archivo "archivo.txt" y nómbralo como "copia.txt".
    `→ Solución: touch archivo.txt && cp archivo.txt copia.txt`
<br>
4. **Ejercicio de Eliminar Archivos:** Crea dos archivos de texto llamados "archivo1.txt" y "archivo2.txt" en el directorio actual. Utiliza el comando "rm" para eliminar el archivo "archivo1.txt".
    `→ Solución: touch archivo1.txt archivo2.txt && rm archivo1.txt`
<br>
5. **Ejercicio de Mover Archivos:** Mueve el archivo "archivo2.txt" a un nuevo directorio llamado "Documentos".
    `→ Solución: mkdir Documentos && mv archivo2.txt Documentos/`
<br>
6. **Ejercicio de Edición de Archivos con nano:** Crea un archivo de texto llamado "notas.txt" usando el comando "nano". Escribe algunas líneas de texto en el archivo y guárdalo.
    `→ Solución: nano notas.txt (escribir dentro de nano el texto y guardar)`
<br>
7. **Ejercicio de Edición de Archivos con vim:** Crea un archivo de texto llamado "texto.txt" usando el comando "vim". Escribe algunas líneas de texto en el archivo y guárdalo.
    `→ Solución: vim texto.txt + escribir dentro cosas y guardar.`
<br>
8. **Ejercicio de visualización parcial de archivos:** Crea un archivo de texto con más de 20 líneas. Usa el comando “head” para mostrar las 5 primeras líneas del archivo. Usa el comando “tail” para mostrar las últimas 5 líneas del archivo.
    `→ Solución: head -n 5 prueba.txt / tail -n 5 prueba.txt`
<br>
9. **Ejercicio de Creación de Directorios:** Crea un nuevo directorio llamado "Proyecto".
    `→ Solución: mkdir Proyecto`
<br>
10. **Ejercicio de Creación de Subdirectorios:** Navega dentro del directorio "Proyecto". Crea dos subdirectorios llamados "src" y "docs" dentro del directorio "Proyecto".
    `→ Solución: mkdir Proyecto/src Proyecto/docs`
<br>
11. **Ejercicio de Creación de Múltiples Archivos:** Crea tres archivos vacíos llamados "file1.txt", "file2.txt", y "file3.txt" en el directorio actual utilizando el comando “touch” en una sola línea.
    `→ Solución: touch file1.txt file2.txt file3.txt`
<br>
12.  **Ejercicio de Creación de Archivos Vacíos:** Crea un archivo vacío llamado "nuevo.txt" en el directorio "Proyecto/src".
     `→ Solución: touch Proyecto/src/nuevo.txt`
<br>
13. **Ejercicio de Copiar un Directorio:** Copia todo el contenido del directorio "Proyecto/src" al directorio "Proyecto/docs"
    `→ Solución: cp -r Proyecto/src/* Proyecto/docs/`
<br>
14.  **Ejercicio de Renombrar Archivos:** Renombra el archivo "nuevo.txt" a "renombrado.txt" en el directorio "Proyecto/src"
    `→ Solución: mv nuevo.txt renombrado.txt Proyecto/src`
<br>
15. **Ejercicio de Mover un Directorio:** Mueve el directorio "Proyecto/docs" a un nuevo directorio llamado "ProyectosAntiguos"
    `→ Solución: mv Proyecto/docs ProyectosAntiguos`
<br>
16. **Ejercicio de Listar Contenido con Detalles:** Utiliza el comando "ls" con la opción para listar el contenido del directorio actual en formato largo.
    `→ Solución: ls -l`
<br>
17. **Ejercicio de Concatenación de Archivos:** Crea dos archivos de texto llamados "parte1.txt" y "parte2.txt". Escribe algunas líneas de texto en cada uno. Usa el comando cat para concatenar el contenido de ambos archivos y redirige la salida a un nuevo archivo llamado "completo.txt".
    `→ Solución: touch parte1.txt parte2.txt / nano parte1.txt (escribimos algo dentro) + nano parte2.txt (escribimos algo dentro) / cat parte1.txt parte2.txt > completo.txt`
<br>
18.  **Ejercicio de Eliminación Recursiva:** Crea un directorio llamado "Eliminar" y dentro de él, crea algunos archivos y subdirectorios. Utiliza el comando "rm" con la opción para eliminar el directorio "Eliminar" y todo su contenido de forma recursiva.
    `→ Solución: mkdir -p Eliminar/hola Eliminar/adios.txt && rm -r Eliminar`
<br>
19. **Ejercicio de Copiar y Renombrar con mv:** Crea un archivo de texto llamado "original.txt" en el directorio actual. Copia y renombra el archivo "original.txt" como "copia-original.txt" usando el comando "mv".
    `→ Solución: echo original.txt / mv original.txt copia-original.txt`
<br>
20. **Ejercicio de Creación de Directorios Anidados:** Crea un nuevo directorio llamado "Proyecto/NuevaCarpeta/Pruebas".
    `→ Solución: mkdir -p Proyecto/NuevaCarpeta/Pruebas`
<br>
21. **Ejercicio de Edición de Archivos con nano y vim:** Abre el archivo "texto.txt" creado anteriormente con "nano" y realiza cambios en el contenido. Abre el archivo "notas.txt" creado anteriormente con "vim" y realiza cambios en el contenido.
    `→ Solución: nano txt + cambios de texto / vim notas.txt + cambios de texto`
<br>
22. Crear un archivo llamado “registro.log” y añade al menos 10 líneas de contenido. Algunas de esas líneas deberán contener la palabra “error”.
    `→ Solución: cat <<EOF > registro.log
hola buenos dias
esto es error
una prueba
de error
para ver
como funcionan
los operadores
y la
redirección error
error
muchos errores
EOF
Este bloque cat <<EOF ... EOF crea el archivo y escribe múltiples líneas a la vez.`
<br>
23. Utiliza un pipe para contar cuántas veces aparece la palabra "error" en un archivo de registro llamado "registro.log".
    `→ Solución: grep -0 "error" registro.log | wc -l / grep -o imprime solo las coincidencias, y wc -l cuenta cuántas líneas (o sea, cuántas veces aparece).`
<br>
24. Redirige la salida del comando "ls" a un archivo llamado "lista_archivos.txt".
    `→ Solución: ls > lista_archivos.txt`
<br>
25. Ejecuta el comando "echo 'Este es un mensaje' y redirige la salida a un archivo llamado "mensaje.txt".
    `→ Solución: echo 'este es un mensaje' > mensaje.txt`
<br>
26. Utiliza el operador > para crear un archivo llamado "salida_comando.txt" que contenga la salida del comando "ls -l".
    `→ Solución: ls -l > echo salida_comando.txt`
<br>
27. Utiliza el operador >> para agregar la salida del comando "date" al final de un archivo llamado "registro_fecha.txt". Prueba a ejecutarlo varias veces y ve observando el contenido del archivo de registro.
    `→ Solución: date >> registro_fecha.txt / cat registro_fecha.txt (para ver que imprime)`
<br>
28. Ejecuta el comando "rm archivo_inexistente.txt" y, utilizando &&, muestra un mensaje que diga "El archivo ha sido eliminado" solo si el comando anterior tiene éxito.
    `→ Solución: rm archivo_inexistente.txt && echo "El archivo ha sido eliminado"`
<br>
29. Ejecuta el comando "ls directorio_inexistente" y, utilizando ||, muestra un mensaje que diga "El directorio no existe" solo si el comando anterior falla.
    `→ Solución: ls directorio_inexistente || echo "El directorio no existe"`
<br>
## Ejercicios extra (más dificultad)
1. **Ejercicio de Búsqueda de Texto en Archivos:** Crea un archivo de texto llamado "data.txt" con varias líneas de contenido. Utiliza el comando “grep” "palabra" para buscar una palabra específica dentro del archivo "data.txt".
    `→ Solución: cat <<EOF > data.txt
Hola mundo
Esta es una línea de prueba
Buscamos la palabra clave
Otra línea más
Palabra clave encontrada
EOF / Buscar la palabra "palabra" en data.txt grep "palabra" data.txt`
<br>
2. **Crea un archivo llamado "informacion.txt" que contenga múltiples líneas, algunas con números. Usa un comando que filtre y muestre solo las líneas que contienen números, redirigiendo la salida a un archivo llamado "lineas_con_numeros.txt".**
    `→ Solución: cat <<EOF>> informacion.txt
    Hola que tal, 
    Hoy es día 5 utilizando
    Terminal y Visual Studio.
    La próxima semana tenemos
    3 días clase de 4 a 8.
    EOF / grep -E '[0-9]+' informacion.txt > lineas_con_numeros.txt`
<br>
3. **Ejercicio de Redirección y Pipes:** Crea un archivo llamado "historial.log" con varias entradas de texto. Utiliza un pipe para contar cuántas líneas contiene el archivo y redirige este conteo a un archivo llamado "conteo.txt".
    `→ Solución: cat <<EOF>> historial.log
    Hola buenos días.
    Hoy es día 5 de Septiembre, 
    mañana a la noche tengo un 
    cumpleaños de mis amigas.
    EOF / wc -l < historial.log > conteo.txt`
<br>
4. **Ejercicio de Comparación de Archivos:** Crea dos archivos llamados "archivoA.txt" y "archivoB.txt". Escribe contenido diferente en ambos archivos. Usa el comando “diff” para comparar los archivos y redirige las diferencias a un archivo llamado "diferencias.txt".
    `→ Solución:  echo "Línea 1 en A" > archivoA.txt
echo "Línea 2 en A" >> archivoA.txt
echo "Línea común" >> archivoA.txt
echo "Línea 1 en B" > archivoB.txt
echo "Línea 2 en A" >> archivoB.txt
echo "Línea común" >> archivoB.txt / Comparar y guardar diferencias = diff archivoA.txt archivoB.txt > diferencias.txt`
<br>
5. **Ejercicio de Scripts Básicos:** Escribe un pequeño script en bash que realice lo siguiente: Cree un directorio llamado "Backup". Mueve todos los archivos .txt del directorio actual a "Backup". Cree un archivo de registro llamado "backup.log" que registre la fecha y hora en que se realizó la copia.
    `→ Solución: cat << 'EOF' > backup.sh
#!/bin/bash
mkdir -p Backup
mv *.txt Backup/
echo "Backup realizado el: $(date)" > Backup/backup.log
EOF / Hacer ejecutable y ejecutar = chmod +x backup.sh / 
./backup.sh`
<br>
6. **Ejercicio de Combinación de Comandos con Pipes y Redirección:** Crea un archivo llamado "log_sistema.log" con varias líneas que simulen entradas de un log de sistema. Filtra las líneas que contienen la palabra "ERROR", cuenta cuántas veces aparece la palabra y redirige el resultado a un archivo llamado "reporte_errores.txt".
    `→ Solución: cat <<EOF > log_sistema.log
INFO: Sistema iniciado
ERROR: Fallo en módulo 1
WARN: Memoria baja
ERROR: Error de conexión
INFO: Proceso finalizado
ERROR: Falla crítica detectada
EOF / Filtrar "ERROR", contar ocurrencias y guardar en reporte_errores.txt = grep "ERROR" log_sistema.log | wc -l > reporte_errores.txt`
<br>
7. **Ejercicio de Redirección Condicional:** Intenta eliminar un archivo llamado "importante.txt". Si el archivo existe y se elimina correctamente, redirige un mensaje de éxito a un archivo llamado "resultado.txt". Si no existe, redirige un mensaje de error a "resultado.txt".
    `→ Solución: rm importante.txt 2>/dev/null && echo "Archivo eliminado correctamente" > resultado.txt || echo "Archivo no existe" > resultado.txt`

### PARA GUARDAR LOS CAMBIOS EN GITHUB DEBEMOS METER EN NUESTRO TERMINAL LOS SIGUIENTES COMANDOS: 

**¡IMPORTANTE, DEBEMOS ESTAR SIEMPRE EN LA UBICACIÓN CORRECTA!**
1. `git add .= todos los cambios me los añades`
2. `git commit -m + el mensaje = se hace un nuevo puento en mi historia`
3. `git push origin master`