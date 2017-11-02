import mongoose from 'mongoose';
import config from './config';

//this sets our promise to ES6 style promise library
mongoose.Promise = global.Promise; 
//enable debugger, this will log output of the argument to console
mongoose.set('debug', true);

try{
  mongoose.connect(config.DB_URL, {
    useMongoClient: true,
  });
}catch(err){
  mongoose.createConnection(config.DB_URL, {
    useMongoClient: true,
  });
}

mongoose.connection 
        .once('open', () => console.log('MongoDB Running'))
        .on('error', e => {
          throw e;
        });