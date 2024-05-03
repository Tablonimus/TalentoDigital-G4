# GUÍA
Paso a paso para combinar Bootstrap y SASS.

## Paso 1
Crear estructura del proyecto.

## Paso 2 
Crear package.json (archivo administrador de paquetes "npm" para mi proyecto)
`npm init -y`

## Paso 2.1
Crear un archivo `.gitignore` para evitar subir cosas innecesarias a GitHub.

## Paso 3
Instalar las dependencias necesarias para el proyecto
Ej: si quiero instalar Bootstrap:
`npm install bootstrap@5.3.3`









### COMANDO PARA CREAR ESTRUCTURA SASS.
`mkdir -p assets/css assets/img assets/js assets/sass assets/sass/base assets/sass/abstract assets/sass/themes assets/sass/components assets/sass/pages assets/sass/layout assets/sass/vendors && touch .gitignore index.html README.md assets/js/index.js assets/sass/main.scss`


### COMANDO PARA COMPILAR SASS
`sass --watch ./assets/sass/main.scss:./assets/css/style.css`




