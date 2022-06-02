# diary-frontend

Esta App creada con Ionic y React JS se conecta a una api para agregar y obtener datos de nuestros contactos clasificados por categorias para tener una agenda organizada y de 
fácil acceso 

# Pasos para arrancar el proyecto

1. Puedes clonar este repositorio o puedes descargarlo como un archivo .zip, una vez tengas el repositorio clonado puedes abrirlo en tu terminal o tu editor de texto 
2. ejecuta el comando npm install para descargarte todas las dependencias de este proyecto(debereas tener instalado Node JS )  
3  Despues de ello podras ejecutar el comando ionic serve y la aplicación ya arrancara de forma normal pero no estara conectada a la API aun para ello lee la siguiente sección
(recuerda que debes tener instalado ionic CLI en tu equipo puedes utilizar el comando $ npm install -g @ionic/cli)

# Conectando nuestro proyecto a la API

Antes de todo te confirmo que hay una API subida a Heroku si deseas implementarla consumiendo esta API solicitame a mi correo electronico sebas1231998@gmail.com, el archivo de variable de entorno 
o puedes utilizar una API local descargando de mi repositorio o clonandolo pero debes tener en cuenta que debes configurarlo para que te funcione en android, por otro lado te presento 
los pasos para que conectes la App a nuestra Api : 

Heroku

1.Solicita al correo sebas1231998@gmail.com las variables de entorno y te enviare las instrucciones y un correo encriptado con el archivo

2.Agrega el archivo de entorno .env a la raiz del proyecto ./diary-frontend

Local
1. Clona el repositorio de la Api: https://github.com/Sebastian1231998/diary-api y sigue el paso a paso 

2. Crea un archivo .env en la raiz del proyecto ./diary-frontend y agrega una variable que apunte a tu api local 

# Android 

Para arrancar este proyecto en Android debes tener todo instalado previamente como Android Studio, el SDK con el emulador correspondiente, etc. Para ello te dejo una guia 
de Ionic que explica el paso a paso para que lo puedas hacer https://ionicframework.com/docs/developing/android. 

1. Para correr la app en android la Api debera estar conectad con la aplicación, puedes usar la Api cargada en Heroku para este proposito o subir la api local a un servidor que acepte
Node JS 
2. Para esta app vamos a utilizar capacitor, por lo tanto para crear tu archivo android puedes ejecutar ionic capacitor add android 
3. Despues deberas utilizar el comando ionic capacitor copy android 
4. El siguiente paso es correo ionic capacitor run android, recuerda que debes tener configurado el SDK del emulador para que te lo reconozca o puedes abrir android Studio y verificar
5. que el emulador exista 



