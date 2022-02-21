// Utilisation d'express pour l'app
const express = require('express');
const app = express();

//Ecoute sur le port
app.listen(6000, () => {
    console.log('listening on port 6000');
}) 