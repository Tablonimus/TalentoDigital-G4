## 1- Creamos el package.json
`npm init -y`

## 2- Instalamos las dependencias necesarias
`npm i -D @babel/preset-env @babel/cli @babel/core @babel/polyfill`

`npm i core-js`

La primera línea instala el comando Babel, la API principal y el preset de transpilación que
usarás. Hoy en día, env es el preset principal de babel y contiene instrucciones para
transpilar todas las funcionalidades presentes en el lenguaje. Mientras que
@babel/polyfill y core-js, instala una colección de polyfills para ser incorporados al código
publicado a los navegadores. Un polyfill es un código escrito en ES5 que rellena partes de
la API que han sido modificadas como parte de ES6, pero que aún no han sido
implementadas por todos los navegadores.

## 3- Creamos el archivo de configuración de babel
`touch babel.config.json`
PD: Copiar en la configuración de babel =>
           
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.4",
        "forceAllTransforms": true
      }
    ]
  ]
}



## 4- Transpilamos el código
`npx babel assets/js -d dist/`

En tu terminal, dentro del directorio actual: fullstack-entorno, escribe: `npx babel origen/ -d dist/`, 
lo que compilará todos los archivos .js de la carpeta src y dejará el
resultado en la carpeta dist/. Es decir, con el comando anterior, Babel se encargará de
transpilar el código existente, crear una nueva carpeta y pasar los códigos ya modificados
dentro de esa carpeta en nuevos archivos con el mismo nombre. Si la operación fue
exitosa podrás observar el siguiente output en el terminal (el tiempo puede variar):
Successfully compiled 2 files with Babel (373ms).