import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';

//this runs the code in db but doesn't import any value 
import './config/db';

const app = express();

const PORT = config.PORT;

app.use(bodyParser.json());

app.listen(PORT, err => {
  if(err){
    console.error(err);
  }else{
    console.log(`App listen to port: ${PORT}`);
  }
});