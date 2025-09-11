# SEMANA 1

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
  - 3. Darle a commit changes...
  - *"Git stash" guarda temporalmente los cambios sin hacer el commit*

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

### ✅ Control de versiones:

El control de versiones es una metodología esencial en el desarrollo de software. Permite rastrear, organizar y administrar los cambios en el código a lo largo del tiempo (como una máquina del tiempo para tu proyecto).
🔑 **Sus pilares fundamentales son:**
**1. Protección del código fuente**
**2. Trabajo colaborativo**
**3. Historial completo**
**4. Creación de ramas y fusiones**
**5. Trazabilidad**
**6. Reducción de errores y problemas**

📦 **Modelos principales:**
Sistemas centralizados
Todos los cambios se registran en un servidor central. Requiere conexión constante y depende de ese servidor.

Sistemas distribuidos
Cada desarrollador tiene una copia completa del historial del proyecto. Se puede trabajar sin conexión.

## 🧠 Fundamentos de Git:
Git es un sistema de control de versiones distribuido (DVCS) y un gestor de código fuente (SCM), creado por Linus Torvalds.

📂 **¿Qué es .git?**
Cuando haces **"git init"**, se crea una carpeta oculta .git donde Git guarda toda la información del repositorio (historial, ramas, configuraciones...).

📘 Algunos de los términos funamentales son:
· **Repositorio:** Directorio que contiene tu proyecto y su historial de versiones.
· **Commit:** Una instantánea del proyecto en un punto del tiempo.
· **SHA:** Identificador único (hash) de un commit.
" **SSH:** Protocolo seguro para conectarse con servicios remotos como GitHub.

## 🛠️ Flujo de trabajo básico en Git:
1. **Inicializar repositorio**: **git init** → crea un repositorio vacío con la carpeta .git

2. **Ver estado actual**: **git status** → muestra qué archivos están modificados, añadidos o listos para commit

3. **Agregar al área de preparación**: **git add archivo** → añade un archivo al staging / **git add .** → añade todos los archivos modificados

4. **Guardar cambios (commit)**: **git commit -m "mensaje"** → guarda los cambios en el historial

5. **Ver historial**: **git log** → muestra todos los commits (puedes usar --oneline, --graph, etc.)

6. **Ver diferencias**: **git diff** → muestra los cambios entre versiones o áreas del repo

## 🧾 La importancia de los commits:
Los commits bien escritos son vitales para entender qué y por qué se hicieron cambios. También ayudan a:
· Revisar código fácilmente
· Encontrar errores con git bisect
· Trabajar en equipo con más claridad

✍️ **Estructura recomendada:**
**1. Asunto:** corto (50-72 caracteres) en modo imperativo y puee incluir referencias a tareas (ej: fix: corrige error de paginación (#123))
**2. Cuerpo:** Es opcional. Solo se usa cuando el asunto no es suficiente para explicar el contexto, las alternativas descartadsa o las implicaciones del cambio. 

Un historial de commits limpio = proyecto más profesional y mantenible.

## 🌐 Trabajar con repositorios remotos: 
En un entorno colaborativo, los desarrolladores comparten sus repositorios y cambios a través de servicios de hosting como GitHub o GitLab. El flujo de trabajo implica:
**1. Clonar (git clone):** copia un repositorio remoto a la máquina local, incluyendo todo su historial.
**2. Añadir/visualizar remotos (git remote):** permite gestionar las conexiones con los repositorios remotos. Se puede añadir uno con "git remote add "nombre" "url"" y listar los existentes con "git remote -v".
**3. Enviar los cambios (git push):** sube los commits de una rama local al repositorio remoto. 
**4. Actualizar repositorio local (git pull y git fetch):**
    **4.1 "git fetch"** descarga los camios del repositorio remoto pero no los combina automáticamente con la rama actual, permitiendo revisarlos antes de fusionar.
    **4.2 "git pull"** decarga y combina automáticamente los cambios, siendo equivalente a "git fetch" seguido de "git merge". Mantener el repositorio local actualizado frecuentemente con "git pull" es una buena práctica.

## 🌿 Flujos de trabajo ramificados:
🌳 **Las ramas (branches)** permiten trabajar en nuevas ideas sin afectar la rama principal. Tipos de ramas:
· **main o master:** rama estable / producción
· **develop:** rama de desarrollo
· **feature/***: nuevas funcionalidades
· **release/***: preparación de versiones
· **hotfix/***: correcciones urgentes

**🔄 Git Flow (flujo recomendado):** UEstrategia creada por Vincent Driessen, define ramas con propósitos específicos:
> master
  └── develop
        ├── feature/login
        ├── release/v1.0
        └── hotfix/404-error

📥 **Los "Pull Requests" (PR)** es una solicitud para fusionar una rama con otra (normalmente hacia main o develop). El flujo típico es:
1. El desarrollador crea una nueva rama
2. Hace commits y la sube al repositorio remoto con git push origin rama
3. Desde GitHub, crea un Pull Request
4. Otros revisan y aprueban el código
5. Se hace merge en la rama principal

Los PRs permiten revisión, discusión y control de calidad antes de integrar código.

## Resumen de comandos Git explicados por categorías:
1. **🔧 Configuración e inicialización:**
Es lo primero que haces al comenzar un proyecto con Git. Aquí preparas el entorno para que Git pueda rastrear los cambios.
    - **"git init":** Inicializa un repositorio vacío en la carpea actual. Crea una carpeta oculta .git donde Git guarda todo.
2. **📄 Ver estado y preparar archivos:**
Git necesita saber qué archivos vas a incluir en tu próximo "foto" del proyecto (el commit). En esta parte defines qué cosas cambiaste y qué vas a guardar.
    - **"git status"** Muestra el estado de los archivos (cuáles cambiaron, cuáles están listos para guardar).
    - **"git add <archivo>"** Prepara un archivo para ser guardado en el próximo commit.
    - **"git add ."**	Añade todos los archivos modificados al área de preparación (staging).
    - **"git diff"**	Muestra las diferencias entre los archivos actuales y los guardados en el último commit. Te ayuda a ver qué cambió.
3. **💾 Guardar cambios (commits)**:
Un commit es como una fotografía del proyecto. Guardas el estado actual del código con un mensaje que explique qué hiciste.
    - **"git commit -m "mensaje""**	Crea un commit con los archivos que preparaste con git add.
    - **"git log"**	Muestra el historial de commits.
    - **"git log --oneline"**	Muestra el historial de commits de forma compacta (una línea por commit).
    - **"git log --graph"**	Visualiza las ramas y fusiones en forma de gráfico (estructura del proyecto).
4. 🌍 **Conectar con repositorios remotos (como GitHub):**
Permite trabajar en equipo. Un repositorio remoto es una copia de tu proyecto en la nube (ej: GitHub). Puedes subir tus cambios o bajar los de otros.
    - **"git clone <url>"**	Crea una copia local de un repositorio remoto.
    - **"git remote -v"**	Muestra los servidores remotos conectados al repositorio local.
    - **"git remote add <nombre> <url>"**	Agrega un repositorio remoto (por ejemplo, origin).
    - **"git push origin <rama>"**	Sube tus commits a una rama específica en el remoto.
    - **"git push -u origin <rama>"**	Sube la rama y la deja "enlazada" para futuros push sin especificar rama.
    - **"git fetch"**	Descarga cambios del repositorio remoto sin fusionarlos. Te permite revisarlos antes.
    - **"git pull"**	Descarga y fusiona automáticamente los cambios del remoto con tu rama local.
5. 🌿**Trabajo con ramas (branches)**:
Las ramas te permiten trabajar en nuevas funcionalidades sin romper la versión principal del proyecto. Cada rama es como una línea de tiempo separada.
    - **"git branch"**	Lista todas las ramas existentes y te dice en cuál estás.
    - **"git checkout <rama>"**	Cambia a otra rama.
    - **"git checkout -b <nueva-rama>"**	Crea una nueva rama y te cambia a ella.
    - **"git merge <rama>"**	Une otra rama con la actual. Muy usado para integrar trabajo terminado.
    - **"git rebase <rama>"**	Mueve los commits de tu rama como si hubieran salido directamente de otra (historial más limpio).
    - **"git cherry-pick <SHA>"**	Aplica un commit específico de otra rama a la rama actual. Muy útil para mover solo lo necesario.
6. 📦**Cambios temporales y recuperación**:
A veces necesitas pausar lo que estás haciendo, o deshacer cosas. Git tiene comandos para guardar cambios temporalmente o recuperar commits eliminados.
    - **"git stash"**	Guarda los cambios actuales sin hacer commit. Útil si necesitas cambiar de rama rápido.
    - **"git stash pop"**	Recupera los cambios que habías guardado con stash.
    - **"git reset"**	Deshace cambios o mueve la historia del proyecto. Puede eliminar commits, sacarlos del staging, etc.
    - **"git reflog"** Muestra un historial detallado de todo lo que hiciste, incluso si usaste reset o rebase. Muy útil para recuperar cosas borradas.
 7. 🏷️**Etiquetas (tags):**
 Las tags marcan puntos importantes del proyecto (como versiones de lanzamiento).
    - **"git tag <nombre>"**: Crea una etiqueta en el commit actual. Útil para marcar versiones estables.
 8. 🪝 **Git Hooks (automatización):**
 Los Git Hooks son scripts que se ejecutan automáticamente en ciertos momentos, como antes de hacer un commit, o antes de hacer push. Se usan para validar código, ejecutar tests, o asegurarse de que el commit cumple ciertas reglas.
 **Importante:**
    - Se encuentran en la carpeta .git/hooks/
    - Se pueden personalizar
    - Algunos ejemplos:
        - **"pre-commit"**	Antes de hacer un commit. Sirve para validar código, revisar errores, correr pruebas
        - **"commit-msg"**	Cuando escribes el mensaje del commit. Sirve para validar formato del mensaje
        - **"pre-push"**	Antes de hacer git push. Sirve para ejecutar pruebas automáticas
        
9. **🔁 Bonus: Comandos útiles para colaboración:**
    - **"git pull"**	Descarga y fusiona los cambios remotos. Úsalo para mantener tu copia actualizada.
    - **"git push"**	Sube tus cambios locales al repositorio remoto (GitHub).
    - **"git push origin <rama>"**	Sube una rama específica al remoto.
    - **"git push -u origin <rama>"**	Lo mismo, pero guarda ese remoto como predeterminado para futuros push.

🧠 **¿Qué hacer en cada momento?**
1. Empezar un proyecto: **git init**
2. Clonar un repositorio: **git clone <url>**
3. Ver en qué estoy trabajando: **git status**
4. Guardar un cambio: **git add + git commit**
5. Subir mis cambios: **git push origin rama**
6. Bajar los cambios del equipo: **git pull**
7. Cambiarme de rama: **git checkout rama**
8. Probar una nueva idea: **git checkout -b nueva-rama**
9. Fusionar ramas: **git merge o git rebase**
10. Recuperar un cambio perdido: **git reflog**
11. Pausar cambios sin hacer commit: **git stash y luego git stash pop**