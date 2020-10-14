const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const actors = require('./routers/actor');
const movies = require('./routers/movie');
let path = require('path');
const app = express();
app.listen(8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "dist/week9Ang")));

mongoose.connect('mongodb://localhost:27017/movies', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');
});
//Configuring Endpoints
//Actor RESTFul endpoionts 
app.get('/actors', actors.getAll);
app.post('/actors', actors.createOne);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.post('/actors/:id/movies/:mid', actors.addMovie);
app.delete('/actors/:id', actors.deleteOne);
//Movie RESTFul  endpoints
app.get('/movies', movies.getAll);
app.post('/movies', movies.createOne);
app.get('/movies/:id', movies.getOne);
app.put('/movies/:id', movies.updateOne);

//Lab7
app.delete('/movies/:id',movies.delbyid);
app.delete('/actors/delAM/:id',actors.delAM);
app.delete('/actors/delMinA/:aid/:mid',actors.delMinA);
app.delete('/movies/delAinM/:mid/:aid',movies.delAinM);
app.post('/movies/:id/actors/:aid', movies.addActor);
app.get('/actors/:year1/:year2',actors.getByYear);
app.delete('/deletemovies/:year1',movies.delByYear);