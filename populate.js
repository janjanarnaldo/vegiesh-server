import mongoose from 'mongoose';
import Client from './models/client';

const clients = [
  {name: 'Penongs Mintal', address: 'Davao City', telNum: '3006068', balance: 1000},
  {name: 'Penongs Toril', address: 'Davao City', telNum: '3006068', balance: 2000},
  {name: 'Penongs Matina', address: 'Davao City', telNum: '3006068', balance: 3000},
  {name: 'Penongs Ponciano', address: 'Davao City', telNum: '3006068', balance: 4000},
  {name: 'Penongs Santa ana', address: 'Davao City', telNum: '3006068', balance: 5000},
  {name: 'Penongs Buhangin', address: 'Davao City', telNum: '3006068', balance: 6000},
  {name: 'Penongs Lanang', address: 'Davao City', telNum: '3006068', balance: 7000},
  {name: 'Penongs GMALL', address: 'Davao City', telNum: '3006068', balance: 8000},
  {name: 'Penongs adsa', address: 'Davao City', telNum: '3006068', balance: 9000},
  {name: 'Penongs asdsad', address: 'Davao City', telNum: '3006068', balance: 10000},
  {name: 'Penongs asdasd', address: 'Davao City', telNum: '3006068', balance: 11000},
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/vegiesh');

// Go through each client
clients.map(data => {
  // Initiliaze a model with client data
  const client = new Client(data);

  // and save it into the database
  client.save().then(() => console.log(data.name));
});
