const express = require("express");
const app = express();

// middleware

app.use(express.static("./public"));
// use the created website on root
app.use(express.json());

// routes

//

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};
//start server
start();
