//Ruta de la app
const { request } = require('http');
const pool = require('../data/config');
const { response } = require('express');
const router = app => {
  //Mostrar mensaje de bienvenida de root
  app.get('/', (request, response) => {
    response.send({
      message: "Bienvenido a Node.js Express REST API!",
    });
  });

  //Mostrar todos los usuarios
  app.get('/users', (request, response) => {
    pool.query('SELECT * FROM users', (error, result) => {
      if (error) throw error;
      response.send(result);
        
    });
  });

  // Mostrar un solo usuairo ID
  app.get('/users/:id', (request,response)=>{
    const id= request.params.id;

    pool.query('SELECT * FROM users WHERE id = ?', id,(error,result)=>{
        if (error) throw error;
        response.send(result);
    });
  });

}


