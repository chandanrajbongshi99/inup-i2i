const express = require('express');
const bodyParser=require('body-parser');
const app=express();
const PORT=process.env.PORT || 3000;
app.set('view engine',"ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




  app.listen(PORT, function() {
    console.log("Server started on port 3000");
  });