// Utilisation d'express pour l'app
const express = require('express');
require('dotenv').config({ path: '.env' })
const app = express();

//Ecoute sur le port
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
}) 