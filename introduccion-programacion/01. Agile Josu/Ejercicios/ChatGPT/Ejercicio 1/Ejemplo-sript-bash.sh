#!/bin/bash

# 1. Número total de procesos
num_procesos=$(ps -e --no-headers | wc -l)

# 2. Memoria total ocupada (en MB)
mem_total=$(ps -eo rss= | awk '{sum+=$1} END {print sum/1024}')

# 3. Los 5 procesos que más memoria consumen
top5=$(ps -eo comm,%mem --sort=-%mem | head -n 6)

echo "=============================="
echo "Número total de procesos: $num_procesos"
echo "Memoria total ocupada: ${mem_total} MB"
echo "Top 5 procesos por consumo de memoria:"
echo "$top5"
echo "=============================="
