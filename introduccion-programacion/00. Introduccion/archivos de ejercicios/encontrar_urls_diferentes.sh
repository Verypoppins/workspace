#!/bin/bash

# Paso 1: Leer el archivo línea por línea
while IFS= read -r line; do
    # Paso 2: Contar el número de caracteres de cada línea
    length=${#line}

    # Paso 3: Verificar si la línea tiene más o menos de 31 caracteres
    if [ $length -gt 30 ]; then
        echo "Línea con más de 31 caracteres: $line"
    elif [ $length -lt 30 ]; then
        echo "Línea con menos de 31 caracteres: $line"
    fi
done < "urls.txt"  # Reemplaza "urls.txt" con el nombre de tu archivo
