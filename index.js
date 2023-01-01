const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send(
    `<html>
    <head>
      <title>Server</title>
    </head>
    <body  style="background-color: 410093; color: white; min-height : vh ; font-size: 2rem; font-family : Sans-serif ;" >
     <div style="display: flex ; justify-content: center; align-items: center;">
        <h1>${process.env.NODE_ENV} Server is up and running</h1>
     </div>
    </body>
  </html>`
  );
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
