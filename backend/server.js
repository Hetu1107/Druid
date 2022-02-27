const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const pdf = require('html-pdf');
const cors = require('cors');
const bodyParser = require("body-parser");
const pdfTemplate = require('./Document/Pdf');

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.json());

// pst req for pdf gen 
app.post('/generate-pdf',(req,res)=>{
  res.send(pdf.create(pdfTemplate(req.body),{}).toFile('Prescription.pdf',(e)=>{
    console.log(req.body);
    if(e){
      return Promise.reject();
    }
    else{
      return Promise.resolve();
    }
  }));
});

app.get('/get-pdf',(req,res)=>{
  res.sendFile(`${__dirname}/Prescription.pdf`);
})

app.listen(PORT, () => {
  console.log("Running on port 5000");
});
