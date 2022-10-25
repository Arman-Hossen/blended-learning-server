const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");
app.use(cors());

const catagories = require("./fakedata/catagories.json");
const detailsData = require("./fakedata/fakedb.json");
app.get("/", (req, res) => {
    res.send(" API is Working Perfectly");
  });
  app.get("/courses", (req, res) => {
    res.send(catagories);
  });
  
  app.get("/courses/:id", (req, res) => {
      const id = req.params.id;
      const allData = detailsData.find( data => data.id=== id) 
      res.send(allData);
    });
  
  



app.listen(port, () => {
  console.log(" running on port", port);
});
