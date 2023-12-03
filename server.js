require('dotenv').config();
const express = require('express');

// express app
const app = express();

//  port
const PORT = process.env.PORT || 4000;

// listen for request
app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`);
})
