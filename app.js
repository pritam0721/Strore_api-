require("dotenv").config();
require('express-async-errors');

//async errors

const express = require("express");
const app = express();
const connectDB = require('./db/connect')

const proudctsRoute = require('./routes/products')

const errorMiddleWare = require("./middleware/error-handler");
const notFoundMiddleWare = require("./middleware/not-found");

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(` <h1>store api </h1>  
    <a href="/api/v1/products">products </a>`);
});

//products routes
 app.use('/api/v1/products',proudctsRoute)
 
app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect to DB
      await  connectDB(process.env.MONGO_URI)
     app.listen(port, console.log(`the porth is on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
