const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const {Sports} = require('./models/sport-model');
const app = express();

const sportsA = [
    {
        id: "123",
        name: "basketball",
        num_players: 5
    }
]

app.delete('/sports/delete', jsonParser, (req, res) =>{
    let id = req.body.id;
    let sportId = req.query.sportId;
    if(!id){
        res.statusMessage = "ID IS MISSING";
        res.status(406).end();
    }
    if(!sportId){
        res.statusMessage = "sportid IS MISSING";
        res.status(406).end();
    }
    if(sportId != id){
        res.statusMessage =" ids do not match";
        res.status(409).end();
    }
    const arraySports = sportsA.filter(sport =>{
        return sport.id == id;
    });
    
    if(arraySports.length == 0){
        res.statusMessage =" id not found";
        res.status(409).end();
    }else{
        res.status(204).end();
    }
});

app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});