#!/bin/bash

# Comprobar que se pasan 2 argumentos
if [ $# -ne 2 ]; then
    echo "Uso: $0 <patrón> <directorio>"
    exit 1
fi

patron=$1
directorio=$2

# Verificar que el directorio existe
if [ ! -d "$directorio" ]; then
    echo "Error: $directorio no es un directorio válido."
    exit 1
fi

# Buscar el patrón en los archivos del directorio (y subdirectorios)
echo "Buscando \"$patron\" en el directorio \"$directorio\"..."
grep -rn "$patron" "$directorio"
