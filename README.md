> # appointment-service-api
1. npm i --save-express // installing express js along with node modules.
2. npm i --save-dev nodemon // any changes made on code is instantly reflected on server without restarting it.
3. npm i dotenv // dotenv configuration file for safe keeping ports and connection strings.
4. npm i mongoose // api for express js to connect and CRUD mongo db.
5. npm i --save moment // time related calcualtions and manipulation library
6. npm i --save express-validator //package is for request body validation.
7. npm i --save swagger-jsdoc swagger-ui-express // installing swagger to enable documentation.
8. npm i winston // logger for debugging API.
9. npm i winston-mongodb.

> ## set up environment
change **.example.env** file to **.env** file
set the follwing parametres **PORT**=your application server port number, **DBPORT** = your mongodb port number, **DATABASE** = your database name, **NODE_ENV** = set it to development for debugging and production for deployment
