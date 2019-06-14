# Virtualizacion-Lab4
El primer paso es crear una pagina web con todas las caracteristicas CRUD mediante etiquetas HTML5 
y la coneccion a MySQl por medio de JavaScript
posteriormente ingreso a mi cuenta de AWS para crear una nueva instancia con EC2, 


Primero que nada se tomo la decision de ver que tipo de herramientas utilizar para llevar a cabo el laboratorio.
    1. Node.js
    2. HTML5
    3. JavaScript
    4. PuTTy
    5. AWS Management Console

Pasos
    Crear una pagina web con las opciones del CRUD
    Crear una base de datos en AWS y conectar la pagina web utilizando JavaScript
    Crear un espacio en GitHub para subir el proyecto de la pagina
    Crear una instancia EC2 y crear una llave de aparamiento utilizando PuTTy
    Conectar PuTTy con la instancia creada anteriormente y abrir su terminal de ec2-user
    Dentro del terminal de PuTTy
        Instalar node.js para poder iniciar la aplicacion web corriendolo en el puerto 3000
        Instalar Node:  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | golpetazo
        Instalar Git:   sudo yum install git
        Creacion de una carpeta:  mk NombreCarpeta
        Entrar a la carpeta: cd NombreCarpeta
        Clonar Repositorio: git clone DireccionRepo
        Carpeta Principal: cd \Virtualizacion-Lab4\Lab_4
        Iniciar proyecto: node src/app.js
        
    La aplicacion se inicio en el puerto 3000
    Para visualizar la pagina web hay que copiar el DNS Publico de la instancia creada anteriormente
    
Paginas de Apoyo
      https://www.youtube.com/watch?v=VxRXlUrV6y0&list=LLIwE38NTHVcYsMqFha-4AMQ&index=4&t=0s    
      https://medium.com/@nishankjaintdk/setting-up-a-node-js-app-on-a-linux-ami-on-an-aws-ec2-instance-with-nginx-59cbc1bcc68c
