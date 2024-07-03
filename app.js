require("dotenv").config();

//async errors

const express = require("express");
const app = express();

const errorMiddleWare = require("./middleware/error-handler");
const notFoundMiddleWare = require("./middleware/not-found");

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(` <h1>store api </h1>  
    <a href="/api/v1/products">products </a>`);
});

//products route

app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect to DB
    app.listen(port, console.log(`the porth is on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
