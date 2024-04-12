# Pasos par crear un repositorio LOCAL y subirlo al REMOTO

## Paso 1 
Crear una carpeta e Inicializar el repositorio LOCAL con `git init`.

## Paso 2 
Crear un repositorio en GitHub (SIN README) y copiar la opción:
`...push an existing repository from the command line`
`git remote add origin https://github.com/Tablonimus/SinReadme.git`
`git branch -M main`
`git push -u origin main`

## Paso 3
Crear archivos y/ó trabajar en tu proyecto.

## Paso 4 
Agregar los archivos sin rastrear al área de staging con el comando `git add .` ó `git add nombreDelArchivo.ext`.

## Paso 5
Agregar los cambios a git LOCAL con `git commit -m "un mensaje"`.

## Paso 6 => Una sola vez, solo al comienzo
Utilizar los comandos copiados del Paso2 y pushear(subir los commits realizados) a GitHub.
`git remote add origin https://github.com/Tablonimus/SinReadme.git`
`git branch -M main`
`git push -u origin main`

# Paso 7
Repetir Desde el paso 3 al 5.
Para subir los cambios al repositorio remoto, utilizaremos en principio:
`git push`

### FIN