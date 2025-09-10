<style>
h1 { color: blue; }
ul { color: black; }
</style>

# DÍA 1 (COMANDOS Y SÍMBOLOS EN EL TERMINAL)
![TERMINAL](Images/image.png)

## COMANDOS:
- **PWD** "Print Working Directory": su función es mostrar la ruta completa del directorio en el que te encuentras actualmente. En mi caso es por ejemplo: /home/usuario.
<br>
- **LS:** Listar el contenido de un directorio.
    1. ls → lista los archivos y carpetas en el directorio actual.  
    2. ls Carpeta → lista los archivos dentro de la carpeta llamada Carpeta.  
    3. ls -l → muestra el listado en formato vertical, con permisos, propietario, tamaño, fechas, etc.  
    4. ls -a → muestra también los archivos ocultos (los que empiezan con .).  
    5. ls -lh → igual que -l pero con tamaños "legibles" (KB, MB, GB en vez de solo bytes).
    <br>
- **MKDIR:** *sirve para crear directorios nuevos (carpetas).*
    `EJ: mkdir nueva_carpeta` crea una carpeta llamada nueva_carpeta en el directorio actual. 
    `Ej: mkdir proyectos/ejemplo`crea la carpeta ejemplo dentro de la carpeta proyectos (si existe).
    `Ej: mkdir -p proyectos/2025/enero` crea toda la ruta de directorios aunque no existan previamente (proyectos, 2025, enero).
<br>
- **TOUCH:** se usa principalmente para crear archivos vacíos o actualizar la fecha de modificación de un archivo ya existente.
    `> Ej → touch notas.txt` → crea un archivo vacío llamado notas.txt (si no existía).  
    `> Ej → touch archivo1 archivo2 archivo3` → crea varios archivos a la vez.
<br>
- **CAT:**  se usa para mostrar el contenido completo de un archivo en la terminal.

    `> Ej → cat archivo.txt`→ muestra en pantalla todo el contenido de archivo.txt.  
    `> Ej → cat archivo1 archivo2` → concatena los archivos y los muestra juntos.  
    `> Ej → cat archivo1 archivo2` > combinado.txt → une el contenido de los dos archivos y lo guarda en combinado.txt.  
    `> Ej → cat >> notas.txt` → permite escribir texto directamente en notas.txt (Ctrl+D para salir).
<br>
- **HEAD:** sirve para mostrar las primeras líneas de un archivo de texto en la terminal.  

    `> Ej → head archivo.txt` → muestra las 10 primeras líneas.  
    `> Ej → head -n 5 archivo.txt` → muestra solo las 5 primeras líneas.  
    `> Ej → head -n 20 archivo.txt` → muestra las 20 primeras líneas.  
    `> Ej → cat archivo.txt | head -n `15` → combina con cat y muestra las 15 primeras líneas del archivo.
<br>
- **NANO:** se usa para editar archivos de texto directamente desde la terminal.
    `> nano archivo.txt` → abre archivo.txt para editarlo (si no existe, lo crea).  
    `> Atajos: Ctrl + O → guardar, Ctrl + X → salir, Ctrl + K → cortar línea, Ctrl + U → pegar línea, Ctrl + W → buscar.`
<br>
- **VIM:** editor más potente que nano, con curva de aprendizaje. 
    `> Modos: Normal (Esc), Insertar (i), Comando (dos puntos).`  
    `> Comandos: i → insertar, Esc → normal, :w → guardar, :q → salir, :wq → guardar y salir, :q! → salir sin guardar.`
<br>
- **TAIL:** muestra el final de un archivo de texto.
    `> Ej → tail archivo.txt → últimas 10 líneas.` 
    `> Ej → tail -n 5 archivo.txt → últimas 5 líneas.` 
    `> Ej → tail -f servidor.log → actualización en vivo.`
<br>
- **MV:** mover o renombrar archivos/directorios.
    `> Ej → mv archivo.txt Carpeta/` → mueve archivo.txt dentro de Carpeta.  
    `> Ej → mv archivo.txt ../` → mueve al directorio superior.  
    `> Ej → mv viejo.txt nuevo.txt` → renombrar archivo.
<br>
- **RM:** eliminar archivos o directorios.
    `> Ej → rm archivo.txt` → elimina archivo.txt.  
    `> Ej → rm -r Carpeta/` → elimina Carpeta y su contenido.  
    `> Ej → rm -rf Carpeta/` → elimina todo sin pedir confirmación.  
    `> Opciones: -i → confirmación, -v → mostrar acción, -r → recursivo, -f → forzado.`
<br>
- **ECHO:** mostrar texto o redirigir a archivos. 
    `> Ej → echo "Hola mundo" → muestra texto.`  
    `> Redirigir: ">" sobrescribe, ">>" añade al final.` 
    `> Mostrar variables: nombre="Juan" → echo "Hola, $nombre".`
<br>
- **GREP:** buscar texto dentro de archivos.
    `> Ej → grep "hola" archivo.txt → busca "hola".`
    `> Ej → grep -i "hola" archivo.txt → ignore mayúsculas/minúsculas.`  
    `> Ej → cat archivo.txt | grep "hola" → busca en la salida de cat.`
<br>
- **RMDIR:** eliminar directorios vacíos.
    `> Ej → rmdir Carpeta` → elimina si está vacía.  
    `> Ej → rmdir -p ruta/completa/carpeta` → elimina ruta completa si está vacía.  
    `> Nota: rm -r es más agresivo; rmdir es seguro.`
<br>
- **CP:** copiar archivos o directorios.
    `> Ej → cp archivo.txt copia.txt` → copia archivo.  
    `> Ej → cp -r Carpeta1 Carpeta2` → copia carpeta recursivamente.  
    `> Opciones: -i → interactivo, -v → verbose.`  
<br>
- **SUDO:** ejecutar comandos con privilegios de administrador.
    `> Ej → sudo apt update` → actualizar paquetes con permisos.  
    `> Ej → sudo touch /etc/archivo.conf` → crear archivo protegido.  
    `> Ej → sudo rm -rf /ruta/protegida` → eliminar con permisos elevados.
<br>
___
## SÍMBOLOS:

- **> :** *se usan en la terminal para redirigir la salida de un comando a un archivo.
: redirección sobrescribiendo: Toma la salida de un comando y la escribe en un archivo, borrando el contenido anterior si ya existía.*
    ```python
    > Ej → echo "Hola mundo" > saludo.txt
    (Crea (o sobrescribe) el archivo saludo.txt con el texto "Hola mundo").
    ```

- **>> :** *redirección de salida añadiendo al final.*
    ```Python
    Ej → echo "Adiós" >> saludo.txt
    (Toma la salida de un comando y la añade al final de un archivo,
    sin borrar su contenido.
    En este caso, añade "Adiós" al final del archivo saludo.txt,
    dejando lo que ya estaba intacto).
    ```

- **dolar/doble dolar:** *se usan en la terminal para acceder a información de variables o procesos.*
    1. **$:** *Valor de una variable: devuelve el contenido de una variable de entorno o definida por el usuario.*
        ```python
        Ej → nombre="Juan" echo $nombre (Muestra: Juan)
        ````

- **doble dolar:** Devuelve el número de identificación del proceso de la terminal que estás usando.
`> Ej → echo $$ (Salida posible: 12345).`
<br>
- **|/||(PIPE) :** se usan en la terminal para encadenar comandos y controlar su flujo.
    1. **|:** pipe, redirigir salida como entrada. Toma la salida de un comando y la envía como entrada a otro comando.
    `> Ej → cat archivo.txt | grep hola` Muestra solo las líneas de archivo.txt que contienen “hola”.
<br>
    2. - **||:** OR lógico entre comandos. Ejecuta el segundo comando solo si falla el primero (devuelve un código distinto de 0).
    `Ej → mkdir nueva_carpeta || echo "No se pudo crear la carpeta"` Si mkdir falla (por ejemplo, la carpeta ya existe), se ejecuta el echo.
<br>
___
___

# DÍA 2 (IDEs)
## IDE:

Aplicación de software que proporciona un conjunto de herramientas y funcionalidades integradas para facilitar el desarrollo de software. Reúne diversas herramientas como un editor de código, un depurador, un compilador, un sistema de control de versiones y más, en una única interfaz.
## VISUAL ESTUDIO CODE:
Es un editor de código fuente desarrollado por Microsoft.
- Instalación programa
- Instalación extensiones (Git history, Git Lens, EsLint (JavaScript), Live Server, Markdown, Prettier
Prettier - C...)

## MARKDOWN: 
Es un lenguaje de marcado ligero que sirve para dar formato a texto de manera sencilla, sin usar menús ni herramientas complicadas. Se usa mucho en documentación, GitHub, blogs y notas, porque convierte texto plano en HTML de forma automática.

1. **Títulos / Encabezados:**
    \# Título H1 → 
    # Título H1
    \## Título H2 →
    ## Título H2
    \### Título H3 →
    ### Título H3
    \#### Título H4 →
    #### Título H4

___
2. **Formato de texto:**
    \**negrita** → **negrita**
    \*cursiva*   → *cursiva*
    \***negrita + cursiva*** → ***negrita + cursiva***
    \~~tachado~~        → ~~tachado~~
___

3. **Listas**
    \- Item 1
    \- Item 2
    \* Item 3
___

4. **Lista numerada**
    \1. Primer ítem
    \2. Segundo ítem
___

5. **Enlaces e imágenes**
    1. \[Texto del enlace](https://ejemplo.com) →
    [Texto del enlace](https://ejemplo.com)
    2. \![Texto alternativo](imagen.png) → 
    ![Texto alternativo](image.png)
___

6. **Citas y bloques de código**
    1. \> Esto es una cita →
    > Esto es una cita

    2. \`Código inline` → para pequeñas porciones de código

    `Código inline`

    3. \```python
    \# Bloque de código
    print("Hola mundo")  →
    ```python
    # Bloque de código
    print("Hola mundo")
    ```
___
7. **Otros útiles:**
    \- Listas de tareas: →
    - Listas de tareas:
    \- [x] Tarea completada →
    - [x] Tarea completada
    \- [ ] Tarea pendiente → 
    - [ ] Tarea pendiente
___
8. **Separadores:**
    1. \--- → 
    ---
    2. \*** → 
    ***

<br>

***
<br>

# DÍA 3: GITHUB Y DOCKER
## GIT:
Es un sistema de control de versiones. En pocas palabras, es una herramienta que te permite hacer un seguimiento de los cambios que realizas en tus archivos o proyectos a lo largo del tiempo.

**¿Por qué es importante Git?**

>**Control de versiones:** Te permite guardar diferentes versiones de tus archivos y proyectos. Si cometes un error, puedes volver atrás y ver cómo estaba el proyecto antes de realizar el cambio.

>**Colaboración:** Git facilita la colaboración entre varios desarrolladores. Cada persona puede trabajar en una parte del proyecto sin sobrescribir el trabajo de los demás.

>**Historial:** Cada vez que haces un "commit" (guardar un cambio), Git crea un registro de ese cambio, lo que te permite ver el historial completo del proyecto, quién hizo qué y cuándo.

## GITHUB:
Es una plataforma web que se basa en Git para alojar, gestionar y colaborar en proyectos de software. Es como un almacén en línea para tus proyectos que usan Git.

- Para actualizar la información se puede realizar directamente desde el terminal o editando el propio GitHub:
  - **Terminal:**
  - 1. Nos posicionamos dentro de la carpeta donde está nuestro archivo (cp ...)
  - 2. git add "archivo.md"
  - 3. git commit -m "x"
  - 4. git push origin master
  - **GitHub:**
  - 1. Accedemos al archivo
  - 2. Editamos directamente en el archivo desde la opción "Edit"
  - 3. Se guarda automáticamente

**Características de GitHub:**

>**1. Repositorio remoto:** GitHub ofrece un lugar donde puedes almacenar tus repositorios Git de forma remota, es decir, en la nube. Esto te permite acceder a tus proyectos desde cualquier lugar y compartirlos con otros.

>**2. Colaboración:** GitHub hace que la colaboración entre desarrolladores sea muy fácil. Puedes clonar repositorios, hacer cambios, y luego subir esos cambios (hacer "push") para que otros vean y trabajen sobre ellos.

>**3. Control de versiones en la nube:** GitHub utiliza Git para gestionar las versiones de tus archivos, pero te ofrece una interfaz web y muchas herramientas adicionales para facilitar el trabajo en equipo, como la posibilidad de abrir "issues" (problemas), hacer pull requests, etc.

>**4. Red social para desarrolladores:** Además de ser una plataforma técnica, GitHub también actúa como una red social para desarrolladores, donde puedes seguir a otros, compartir proyectos, hacer "fork" de proyectos interesantes y colaborar en ellos.

>**5. GitHub Pages:** GitHub permite alojar sitios web estáticos de forma gratuita, usando los archivos almacenados en tus repositorios.
<br>
___
## DOCKER:
1. **QUÉ ES:**
    >Una plataforma de software que permite crear, distribuir y ejecutar aplicaciones en contenedores. Un contenedor es una especie de "caja" que contiene todo lo necesario para ejecutar una aplicación, incluyendo el código, las bibliotecas, las dependencias y el sistema de archivos necesario.

    *(Docker es como una caja mágica donde puedes meter cualquier cosa que necesites para que tu aplicación funcione (por ejemplo, Node.js y otros archivos importantes). Una vez que metes todo en la caja, puedes llevar esa caja a cualquier parte y saber que funcionará igual, sin importar el lugar.)*
<br>
2. **¿DÓNDE SE ALMACENAN?** Existen 2 tipos:

    >**1. Repositorios públicos:** Si subes una imagen a Docker Hub y la haces pública, cualquier usuario de Docker puede descargarla, usarla y ver cómo está construida.

    >**2. Repositorios privados:** Si prefieres que tus imágenes no sean accesibles al público, puedes optar por un repositorio privado. Para usar repositorios privados en Docker Hub, es necesario tener una cuenta de pago (aunque puedes tener hasta un número limitado de repositorios privados en cuentas gratuitas).

3. **TÉRMINOS BÁSICOS PARA ENTENDER DOCKER:**
    3.1 **¿qué es una imagen?**: Es como la receta de una pizza. Tiene todos los ingredientes que necesitas pero no es la pizza lista praa comer. Es solo una lista de instrucciones de lo que necesitas para hacer la pizza.

    3.2 **¿Qué es un contenedor?**: 
    Es la pizza ya hecha. Con la receta (la imagen), haces la pizza (contenedor). La pizza ya tiene todo lo que necesitas (ingredientes), y ahora está lista para comer. Puedes comer pizza (usar el contenedor), pero si te quedas sin pizza, puedes hacer una nueva usando la receta (imagen). Cada pizza que haces (contenedor) es una copia de la receta (imagen), y cada vez que la haces, es una pizza nueva.
    3.3 **¿cómo creamos un contenedor?**
       `→ Comando: docker + create + (nombre de la imagen)` = saca un ID de esa imagen. 

---
# SEMANA 2
## 01. AGILE (Buenas prácticas)
*Profesores: Josu Gorostegui y Juan Ignacio Forcén.*

**Introducción al control de versiones (GIT):**
**GIT** es el ejecutable. El archivo local que ejecuto y que luego subo a las plataformas de almacenamiento (GitHub por ejemplo). Es como una máquina del tiempo, me permite volver a versiones anteriores si me hiciese falta. 
**GIT HUB:** servicio de almacenamiento. No tiene nada que ver con GIT, sólo sirve para almacenar y compartir mis versiones.
**Git Lab**: otra herramienta (investigar sobre qué es pero los de Veridas lo usan)

>Para iniciar o saber dónde está mi repositorio git, introducir el siguiente comando en mi terminal desde la carpeta usuario: ls -F1 .git/

**Comandos:**
code . (abre el visual en el directorio que haya creado o donde esté con el pwd)

>    01. Git add + nombre del archivo (agrega todos los cambios del directorio) ej: git commit -m "he subido una prueba"
>    02. Git commit -m "El texto que le pones a lo que estás subiendo". ej: git commit -m "he subido una prueba".
>    03. Git log (Te enseña lo que has subido)
        - 
>    04. Git commit --amend -m "nuevo mensaje" añade solo el mensaje nuevo. 
>    05. Git commit --amend (cambios en el último commit)
>    06. Git diff: permite ver las diferencias por ejemplo entre 2 ficheros. (Sólo diff me permite ver que es lo que vamos a añadir nuevo antes de hacer el "commit").
>    07. Git tag V1.0 (simplemente sirve para etiquetar mis versiones).
>    08. Git checkout nombre_rama: 
>    09. Git brunch new_feature
> **Siempre pull (repositorio actualizado), commit (mis cambios) y push (actualización y subida de los cambios)**
> **Pushear siempre, es mejor actualizar contantemente y subir pequeños cambios que hacer una archivo enorme porque me dará problemas si son archivos colaborativos.**
- **Clonar:** haces una copia completa de un repositorio pero sólo para ti. 
- **Fork:** es como una copia pero que puedo volver a mergear con el master original con su permiso. Pero te descargas el contenido sólo hasta el punto en el que lo has forkeado, no se te añaden los commits nuevos que se hagan en el archivo master. 

pasos para hacer rama:

---

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
5. **Usar git stash para guardar temporalmente estos cambios sin hacer commit.**
6. **Crear una nueva rama llamada feature/login.**