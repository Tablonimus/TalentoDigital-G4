deploy en firebase hosting => 1ra vez

1- por unica vez => npm install -g firebase-tools
2- Ir al proyecto que quiero deployar y...
-Crear una carpeta distribuible `npm run build`
-Crear configs de hosting `firebase init` ó `firebase init hosting`
-Hacer el deploy => `firebase deploy`


para la seguna vez=> cada vez que haga un cambio, debo ejecutar npm run build
-Crear una carpeta distribuible `npm run build`
-Hacer el deploy => `firebase deploy`