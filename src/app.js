const fs = require('fs');
const express = require('express');
const app = express();

//Middleware
app.use(express.json());

const tourDetails = JSON.parse(fs.readFileSync(`${__dirname}/data/tours.json`));

app.get('/tours', (req, res) => {
  //write a code here to get all the tours from tours.json
  fs.readFile(`${__dirname}/data/tours.json`, (err, data) => {
    if(err){
      console.log(err);
      res.status(500).json({message: 'Internal Server Error'});
      return;
    }
    const tourData = JSON.parse(data);
    res.status(200).json(tourData)
  })
});

app.post('/tours', (req, res) => {
  const { name, description, duration, price } = req.body;
  /* 
    Be -> DB -> FE -> 100 fields -> 4 
  
  */
 //read the file
 //append in the data 
 //write the file 
 fs.readFile(`${__dirname}/data/tours.json`, (err, data) => {
    if(err){
      console.log(err);
      res.status(500).json({message: 'Internal Server Error'});
      return;
    }
    const tourData = JSON.parse(data);
    const newId = tourData[tourData.length-1].id + 1;
    const newTour = {name, description, duration, price , newId}
    tourData.push(newTour)

    fs.writeFile(`${__dirname}/data/tours.json`, JSON.stringify(tourData), (err)=>{
      if(err){
        console.log(err);
        res.status(500).json({message: 'Internal Server Error'});
        return;
      }
      res.status(200).json({ message: 'Tour added successfully'})
    })
  })
  //Write a code here for creating new tour from data/tours.json
  //For creating new id use this logic
  // const newId = tourDetails[tourDetails.length - 1].id + 1;
});

app.put('/tours/:id', (req, res) => {
  const tourId = parseInt(req.params.id);
  const updatedTour = req.body;

  //write a code here for updating a tour
});

app.delete('/tours/:id', (req, res) => {
  const tourId = parseInt(req.params.id);
  //Write a code here for deleting a tour from data/tours.json
});

module.exports = app;
