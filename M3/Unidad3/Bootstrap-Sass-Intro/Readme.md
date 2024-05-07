# GUÍA

Paso a paso para combinar Bootstrap y SASS.

## Paso 1

Crear estructura del proyecto.

## Paso 2

Crear package.json (archivo administrador de paquetes "npm" para mi proyecto)
`npm init -y`

## Paso 3

Instalar las dependencias necesarias para el proyecto
(Cuando instales tu primera dependencia se te crearán dos cosas! => una carpeta node_modules y un archivo llamado package-lock.json)
Ej: si quiero instalar Bootstrap:
`npm install bootstrap@5.3.3`

## Paso 3.1

Crear un archivo `.gitignore` para evitar subir cosas innecesarias a GitHub. Se debe escrbir dentro de este archivo `node_modules`.

# PD: VER CARPETA customBootstrap DE LA UNIDAD, PARA UN MEJOR MÉTODO DE EDICIÓN BOOTSTRAP

## Paso 4

Integrar Bootstrap al proyecto.
-Ej1-: Utilizando import en el main.scss: `@import "../../node_modules/bootstrap/dist/css/bootstrap.css"`

Puedes compilar tu propio Sass y corroborar si se integró. No olvides linkear el style.css creado a tu estructura .html

## Paso 5

Prueba Bootstrap en tu html:
`<h1 class="bg-success">Hola Mundo!</h1>`

## Paso 6 (Opcional )

Editar los valores por defecto de bootstrap:
-Ej1- ir a la carpeta `/node_modules/bootstrap/dist/css/bootstrap.css` y modificar su contenido.
-Ej2- ir a la carpeta `/node_modules/bootstrap/dist/css/bootstrap.css` , copiar el contenido y pegarlo en un parcial dentro de mi carpeta `/sass/vendors`

<!-- ----------------------------------------------------------------------------------------------- -->

### COMANDO PARA CREAR ESTRUCTURA SASS.

`mkdir -p assets/css assets/img assets/js assets/sass assets/sass/base assets/sass/abstract assets/sass/themes assets/sass/components assets/sass/pages assets/sass/layout assets/sass/vendors && touch .gitignore index.html README.md assets/js/index.js assets/sass/main.scss 
`

### COMANDO PARA COMPILAR SASS

`sass --watch ./assets/sass/main.scss:./assets/css/style.css`
