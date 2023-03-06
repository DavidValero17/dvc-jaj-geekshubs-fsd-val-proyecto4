# D&J Clinic

<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#stacks">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
  </ol>
</details>

## Sobre el proyecto
---

Este es el proyecto número 4 del bootcamp fullstack developer de Valencia, realizado por Jordi y David. En este proyecto hemos realizado el backend de una clinica dental donde podremos realizar registros de usuarios los cuales se diferenciaran de clientes, doctores y administradores. 

Como clientes podremos: 
<ol>
<li>Crear una cita</li>
<li>Revisar nuestras propias citas</li>
<li>Modificar nuestras citas</li>
<li>Eliminar nuestras citas</li>
<li>Revisar nuestro perfil</li>
<li>Actualizar nuestro perfil</li>
</ol>
Como Doctores podremos: 
<ol>
<li>Ver nuestro perfil</li>
<li>Editar nuestro perfil</li>
<li>Comprobar todas las citas existentes</li>
</ol>
Como Admin podremos:
<ol>
<li>Realizar todo lo anterior mencionado</li>
<li>Comprobar todos los clientes existentes</li>
</ol>

---

## Stack
Tecnologías utilizadas:
<div align ="center">
</a>
<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/JavaScript">
    <img src= "https://img.shields.io/badge/javascipt-EFD81D?style=for-the-badge&logo=javascript&logoColor=black"/>
</a>
<a href="https://jwt.io/">
    <img src= "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</a>
<a href="https://www.postman.com/">
    <img src= "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
</a>
<a href="https://www.mysql.com/">
    <img src= "https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&logo=mysql&logoColor=white"/>
</a>
<a href="https://www.github.com/">
    <img src= "https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=white"/>
</a>
<a href="https://git-scm.com/">
    <img src= "https://img.shields.io/badge/git-F54D27?style=for-the-badge&logo=git&logoColor=white"/>
</a>
<a href="https://www.docker.com/">
    <img src= "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
</a>
<a href="https://www.sequelize.org/">
    <img src= "https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&logo=sequelize&logoColor=white"/>
</a>
 </div>
 
 ---

 ## Diagrama de la Base de Datos

 ![Alt text](assets/Diagrama%20BBDD.png)

 ---

 ## Instalación 
1. Clonar el repositorio
2. ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos 
4. ``` $ Ejecutamos las migraciones: npx sequelieze-cli db:migrate ``` 
5. ``` $ Ejecutamos los seeders: npx sequelize-cli db:seed:all ``` 
6. ``` $ npm run dev ``` 

---

## Endpoints
<details>
<summary>Endpoints</summary>

- AUTH
    - REGISTER

            POST localhost:4000/register
        body:
        ``` js
            {
                "name": "pepe",
                "surname": "bombo clap",
                "phone": "666111222",
                "email": "pepe@pepe.com",
                "password": "user"
            }
        ```

    - LOGIN

            POST localhost:4000/login 
        body:
        ``` js
            {
                "email": "david@david.com",
                "password": "admin"
            }
        ```

- USER
    - GET PROFILE

            GET localhost:4000/profile

    - EDIT PROFILE

            PUT localhost:4000/profile/update

    - CHECK ALL APPOINTMENTS BY USER

            GET localhost:4000/appointments/checkall

- APPOINTMENTS
    - NEW APPOINTMENT

            POST localhost:4000/appointment   

        body:
        ``` js
            {
                "date": "2023-03-01",
                "hour": "18:00:00",
                "price": 150.5,
                "about": "Cita de alyna",
                "doctor_id": 1
            }
        ```      
    - DELETE APPOINTMENT

            DELETE localhost:4000/appointment/4

    - UPDATE APPOINTMENT

            PUT localhost:4000/appointment/5

    - CHECK ALL APPOINTMENTS AS DOCTOR
           
           GET localhost:4000/appointments/checkall/doctor

- CLIENTS
    - CHECK ALL CLIENTS AS ADMIN

            GET localhost:4000/profile/checkallclients

</details>

--- 

## Agradecimientos

Nos gustaría agradecer como siempre a todos los docentes y a nuestros compañeros que dia a dia nos brindan su apoyo y hacen que todo esto sea posible. Muchas gracias.





