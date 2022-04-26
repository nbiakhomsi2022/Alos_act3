import jwt from "jsonwebtoken";
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep clients
let clients = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



function populateHeader(jsonObj) {
    var myH1 = document.createCount('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
  
    var myPara = document.createCount('p');
    myPara.textContent = 'Adress: ' + jsonObj['adress'] + jsonObj['formed'];
    header.appendChild(myPara);
  }


  const post = require('.POST/')


  const post = require('.DELETE/')


