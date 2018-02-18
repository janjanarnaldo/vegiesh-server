import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './routers';

// Connect to MongoDB
mongoose.connect('mongodb://localhost/vegiesh');

// Init http server
const app = express();

// parse urlencoded request bodies into req.body
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json())

// Logger that outputs all requests into the console
app.use(morgan('combine'));

// Use v1 as prefix for all API endpoints
router.forEach((route) => {
  app.use('/v1', route);
});

// Launch the server on port 3001
const server = app.listen(3001, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
