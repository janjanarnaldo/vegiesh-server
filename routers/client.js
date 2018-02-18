import express, { Router } from 'express';

// Import clients action from clients controller
import { one, save, remove } from '../controllers/clients';

// Initialize the routers
const client = Router();

// Single client
client.route('/client/:_id')
  .get(one)
  .post(save);

export default client;
