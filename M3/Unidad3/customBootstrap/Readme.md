# Paso a paso crear repositorio con dependencias (manejador de dependencias y la estructura normal del proyecto):

## Paso 1 => crear una estructura inicial del proyecto

`mkdir -p assets/css assets/img assets/js assets/sass assets/sass/base assets/sass/abstract assets/sass/themes assets/sass/components assets/sass/pages assets/sass/layout assets/sass/vendors && touch .gitignore index.html README.md assets/js/index.js assets/sass/main.scss`

## Paso 2 => crear un package.json => nuestro archivo manejador de paquetes

`npm init -y`

## Paso 3 => instalar dependencias

EJ: `npm i bootstrap`
PD: Recordar que esto nos crea un archivo package-lock.json y una carpeta node_modules... de preferencia NO TOCAR!...

<-- ---------------------------|------------------------ -->

# Paso a paso para customizar el código fuente (por defecto) de Bootstrap:

## Paso 1 => Incorporo Bootstrap en mi proyecto

PD: En este ejemplo importaremos en nuestro main.scss el manifiesto SASS de bootstrap. El mismo se encontrará en:
"node_modules/bootstrap/scss/bootstrap.scss".
Ej: `@import "../../node_modules/bootstrap/scss/bootstrap.scss"` en mi main.scss

Para corroborar que este paso es correcto, debo crear alguna etiqueta ejemplo que utilice bootstrap:
`<h1 class="bg-primary"> Hola Mundo! </h1>`

NO OLVIDAR HACER EL TAG LINK AL CSS QUE GENERARÁ BOOTSTRAP EN EL HTML.

## Paso 2 => Ejecutar SASS

`sass --watch ./assets/sass/main.scss:./assets/css/style.css`

Este comando ahora compilará todo bootstrap y todo mi código sass, en uno solo, y lo devolverá en un archivo style.css dentro de mi carpeta assets

## Para customizar los valores predeterminados de bootstrap, debo modificar los parciales de bootstrap.
`Para modificar un color de la paleta de colores de Bootstrap, debo ir al parcial _variables.scss y aprox en la línea 300 cambiar los valores`

PD: 
Recomendaciones previas: 
 - cambia todo lo que necesites antes de compilar con sass.
 - Si necesitas hacer un nuevo cambio en el código fuente de bootstrap, ¡NO OLIVDES VOLVER A COMPILAR! 
