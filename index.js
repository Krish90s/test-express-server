const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send(`<html>
  <head>
    <title>Server</title>
    <style>
    *{
      padding-top : 4rem;
      margin : 0;
    }
      body {
        background: #410093;
        color: white;
      }
      h1 {
        font-size : 5rem;
        margin: 0;
        padding:0;
        text-align: center;
        font-family: 'arial';
      }
    </style>
  </head>
  <body>
      <h1>server is up and running</h1>
  </body>
</html>`);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
