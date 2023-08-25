// import some node modules for later
const path = require("node:path");

// create express app

const express = require("express");
const { corsMiddleware } = require("./middlewares/cors");

const app = express();

// use some application-level middlewares
app.use(corsMiddleware);

app.use(express.json());

// import and mount the API routes

const router = require("./router");

app.use("/api", router);

// serve the `backend/public` folder for public resources

app.use(express.static(path.join(__dirname, "../public")));

// ready to export

module.exports = app;
