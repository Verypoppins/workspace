### Ejercicio 1 - Operaciones con terminal
Tareas a realizar:
1. **Renombrar los tres ficheros:**
a. first.txt -> primero.txt
*sol -> mv first.txt primero.txt*
b. second.txt -> segundo.txt
*sol -> mv second.txt segundo.txt*
c. tercero.txt -> tercero.txt
*sol -> mv third.txt tercero.txt*
- el mv renombra los archivos.
2. **Borrar el directorio folder2**
*sol -> rm -r folder2*
- rm -r borra el directorio y todo su contenido. 
3. **Crear una carpeta llamada imagenes (vacía)**
*sol -> mkdir imagenes*
- mkdir crea un directorio nuevo.
4. **En la carpeta folder1 crear un archivo de texto con contenido (cualquier nombre).**
*sol -> echo "Esto es una línea de texto" > folder1/con-texto.txt*
- echo añade texto y > folder1/con-texto.txt crea un archivo dentro de esa carpeta directamente. 
5. **En la carpeta folder1 crear un archivo de texto sin contenido (cualquier nombre).**
*sol -> touch folder1/vacio.txt*
- touch folder1/vacio.txt crea un archivo de texto vacío dentro de la ruta marcada.
6. **En la carpeta raíz, ejecutando find * debería verse lo siguiente.**
[$ find *
folder1
folder1/zzz.txt
folder1/abc.txt
folder1/vacio.txt
primero.txt
segundo.txt
tercero.txt]
*sol -> find*
- find * te muestra el listado con todo el contenido incluidos los sub-niveles.
7. **Ejecutar el comando anterior (find `*`) y redirigir la salida a un archivo de texto (cualquier nombre).** 
*sol -> find * > 7.txt*
- find * + > + 7.txt guarda esa estructura en el nuevo archivo creado.
---
### Ejercicio 2 - Git
Este ejercicio es una continuación del ejercicio anterior.
Los mensajes de commit se dejan a libre elección del estudiante.
1. **Crear un repositorio git en una carpeta vacía (lo podemos llamar curso)**
*sol -> mkdir curso / cd curso / git init (init crea un reositorio vacío en una carpeta .git oculta donde se guarda el historial)* 
- **mkdir crea carpeta nueva / cd te posiciona dentro de la carpeta / git init crea el repositorio vacío con una carpeta .git oculta donde se guarda todo el historial.**
2. **Añadir el archivo primero.txt, y segundo.txt al repositorio (commit)**
> *sol -> cp "home/usuario/ALB../Temario/01../Ejercicio 1/primero.txt .* **+** *cp "home/usuario/ALB../Temario/01../Ejercicio 1/segundo.txt .* **+** *git add primero.txt segundo.txt* **+** *git commit -m "Copia y añade primero.txt y segundo.txt" / . copia los archivos en el directorio actual*
- **"cp" copia los archivos al reositorio actual / "git add" los añade / "git commit -m" nos explica lo que hemos añadido**
3. **Copiar la carpeta folder1 al repositorio con todo su contenido**
*sol -> cp -r "/home/usuario/ALB../Temario/01--/Ejercicio 1/folder1" . / git add folder1 / git commit -m "añadir folder1 y su contenido"*
- **"cp -r" copia todo el contenido de una carpeta / "git add" lo añade / "git commit -m especifica lo que hemos subido" / " ." añade ese commit en el directorio actual**
4. **Añadir un archivo vacío al repositorio (commit)**
*sol -> tuch archivo-vacio.txt / git add archivo-vacio.txt / git commit -m "Añadido un archivo vacío"*
- **"touch" crea el archivo vacío / "git add" lo añade / "git commit -m lo especifica**
5. **Crear una rama (el nombre puede ser cualquiera) y añadir el archivo tercero.txt(commit)**
*sol -> git checkout -b mi-rama / cp "/home/usuario/ALB../Temario/01../Ejercicio 1/tercero.txt" . **+** git add tercero.txt **+** git commit -m "añadir tercero.txt a mi-rama"*
- **"git checkout -b" crea la rama y te cambia a ella directamente / "cp + ruta + " ." te copia el archivo tercero.tx en el directorio actual" / "git add" añade el archivo / "git commit -m le añade la descripción al tu nuevo commit en mi-rama**
6. **Añadir una línea de texto al final del fichero tercero.txt (commit)**
*sol -> echo "linea añadida" >> tercero.txt / git add tercero.txt / git commit -m "añadir una línea al final del archivo tercero.txt"*
- **"echo te añade el texto 7 ">>" te coloca el nuevo texto al final de archivo / "git add" te lo sube / "git commit -m te lo especifica según lo que pongas**
7. **Copiar tercero.txt en cuarto.txt (commit en la rama)**
*sol -> cp tercero.txt cuarto.txt / git add cuarto.txt / git commit -m "Crea un archivo nuevo a partir del inicial"*
- **cp copia el archivo completo con otro nombre / "git add" lo añade / "git commit -m especifica que has hecho**
8. **Hacer un merge de la rama con master**
*sol -> git checkout master / git merge mi-rama*
- **"git checkout master" cambia a la rama master que es donde queremos poner los cambios / "git merge mi-rama" combina los cambios de la rama "mi-rama" en la rama master. Así todo lo que hemos hecho en "mi-rama" ahora también está en master**
9. **(Estamos en master)**
10. **Copiar el archivo del apartado 7 del ejercicio 1 (commit)**
*sol -> cp "/home/usuario/ALB../Temario/01../Ejercicio 1/7.txt" . / git add 7.txt / git commit -m "Añadir el archivo 7,txt con estructura del proyecto"*
- **cp + .../7.txt + " ." copia ese archivo con todo su contenido en el directorio actual / git add lo añade / git commit -m lo especifica**
11. **Ejecutar find * de nuevo y redirigir la salida a un nuevo archivo (commit, en master).**
*sol -> find * > estructura-final.txt / git add estructura-final.txt / git commit -m "Añadir el nuevo archivo"*
- **find * para ver la estructura + ">" redirigirla a un nuevo archivo llamado "estructura-final.txt" / git add añade ese nuevo archivo / git commit -m "" especifica lo que subimos**
12. **Ejecutar git log --oneline --decorate --graph --all y redirigir la salida a un nuevo archivo (commit, en master). Una vez terminado los puntos anteriores enviar el .zip a través de la plataforma moodle.**
*sol -> git log --oneline --decorate --graph --all > historial-git.txt / git add historial-git.txt / git commit -m "guardar el historial de commits"*
- **git log + oneline (muestra cada commit en 1 línea); decorate (muestra los nombres de ramas y etiquetas junto a los commits); graph (dibuja una representación visual del historial y los merges); all (muestra todas las ramas y no sólo la actual) / ">" redirige esta información a un nuevo archivo llamado historial-git.txt / git add lo añade / git commit -m lo especifica**
---
### Ejercicio 3 - Git Avanzado
En este ejercicio partiremos de cero, tendremos que inicializar una carpeta vacía para
poder trabajar con git.
1. **Crear un archivo llamado "config.sh" con el siguiente contenido:**
`#!/bin/bash
export DB_USERNAME="admin"
export DB_PASSWORD="secretpassword"
echo "Username: $DB_USERNAME"
echo "Password: $DB_PASSWORD"`
> *sol -> cd Ejercicio\ 3 / git init / cat <<EOF > config.sh
#!/bin/bash
export DB_USERNAME="admin"
export DB_PASSWORD="secretpassword"
echo "Username: \$DB_USERNAME"
echo "Password: \$DB_PASSWORD"
EOF*
- **"Git init" inicializa el repositorio en la carpeta actual / cat <<EOF...EOF> es una forma de escribir varias líneas en un archivo desde la terminal / config.sh**
2. **Añadir y hacer commit de config.sh.**
*sol -> git add config.sh / git commit -m "Texto"*
3. **Crear un archivo .gitignore y agregar config.sh a él para evitar que se trackeen
cambios futuros en este archivo.**
*sol -> echo "config.sh" >> .gitignore / git add .gitignore / git commit -m "X"*
4. **Modificar config.sh cambiando la contraseña a "newpassword".**
*sol -> nano config.sh / cambiar secretpassword por newpassword*
5. **Usar git stash para guardar temporalmente estos cambios sin hacer commit.**
*sol -> git stash*
6. **Crear una nueva rama llamada feature/login.**
*sol -> git checkuot -b feature/login*
7. **En esta nueva rama, crear un archivo login.sh con el siguiente contenido:**
    >#!/bin/bash echo "Funcionalidad de login"
*sol -> touch login.sh / nano login.sh: #!/bin/bash
echo "Funcionalidad de login"*
8. **Hacer commit de login.sh.**
*sol -> git add login.sh / git commit -m "añadido el login.sh"*
9. **Volver a la rama master y crear un archivo main.sh con el siguiente contenido: #!/bin/bash
echo "Aplicación principal"**
*sol -> git checkout master / touch main.sh / nano main.sh: #!/bin/bash
echo "Aplicación principal"*
10. **Hacer commit de main.sh.**
*sol -> git add main.sh / git commit -m "Añadido el main"*
11. **Usar git rebase para integrar los cambios de master en feature/login.**
*sol -> git checkout feature/login / git rebase master*
12. **En la rama feature/login, modificar login.sh añadiendo una nueva función y hacer commit.**
*sol -> git checkout feature/login / nano login.sh / añadir: login() {
  echo "Login realizado"
} / git add login.sh / git commit -m "Añadida la nueva funcionalidad en el login.sh"*
13. **Volver a master y modificar también login.sh de una manera diferente.**
*sol -> git checkout master / nano login.sh / Añadir la funcionalidad: login() {
  echo "Login realizado"
} / git add login.sh / git commit -m "Añadida la nueva funcionalidad en login.sh"*
14. **Intentar hacer merge de feature/login en master. Esto debería causar un conflicto.**
*sol -> "**git merge**" feature/login / "**git status**" / "**nano**" login.sh: #!/bin/bash echo "Login alternativo"
login() {echo "Login realizado"} / "**git add**" login.sh / "**git commit -m**" "Arreglado el conflicto entre ambas versiones*
15. **Resolver el conflicto manualmente y completar el merge.**

16. **Crear una nueva rama llamada hotfix desde master.**
*sol -> git checkout -b hotfix (se denominan así las ramas que están creadas para corregir errores urgentes) aunque la he puesto mal y he puesto "hotflix" / git branch (para saber en qué rama estoy)*
17. **En hotfix, hacer un cambio en main.sh y hacer commit.**
*sol -> nano main.sh: echo "Hotfix aplicado" / git add main.sh / git commit -m "Apliado el hotfix en main.sh"*
**18. Volver a master y usar git cherry-pick para aplicar el commit de la rama hotfix sin hacer merge.**
*sol -> git checkout master / git log hotflix --oneline (para saber el hash (ID) del commit que hicimos en esta rama hotflix) y cogemos la referencia que aparece en la primera línea delante del (hotflix) -- 5e34709 / git cherry-pick 5e34709 (copia un commit específico que en este caso será el del hotfix/hotflix) / git log --oneline si queremos ver el cambio.
>*Cuando aplicamos el cherry-pick a ese número, sólo nos modifica ese commit sin traer todo el historial modificado de la rama, es como copiar y pegar un commit puntual*
19. **En master, usar git reset --hard para volver al estado anterior al cherry-pick.**
*sol -> git reset --hard HEAD~1 (el head~1 hace referencia al commit anterior al actual)*
20. **Usar git reflog para encontrar el commit perdido y recuperarlo creando una nueva rama.**
*sol -> git reflog (q para salir) / git checkout -b recuperacion 8900b9b / git log --oneline (para ver que se ha recuperado el head borrado)*
21. **Finalmente, usar git revert para deshacer el commit que añadió main.sh en master.**
*sol >git checkout master / git log --oneline (buscar el main.sh (625a2b3)) / git revert "625a2b3"(crea un nuevo commit que revierte otro commit anterior, no borra el historial como el git reset. Ideal para deshacer cambios en ramas compartidas o públicas con master) / git log --oneline para revisar que se ha cambiado*
22. **Usar git rebase para incorporar los cambios de la rama "recuperacion" a master.**
*sol -> git checkout master / git rebase recuperacion (da error así que tengo que decidir si borrar el main.sh del master) / git rebase --continue + aceptar / git log --oneline --graph (para revisar si se hizo bien) + q para salir*
23. **Aplicar los cambios guardados en el stash usando git stash pop y hacer un commit con estos cambios.**
*sol -> git stash pop (recupera los cambios guardado y elimina el stash aplicado) / git add config.sh (añadimos el archivo modificado que nos aparece en rojo) / git commit -m "Aplicados los cambios guardados en stash" / git push origin master (para reflejar esos cambios en GitHub)*