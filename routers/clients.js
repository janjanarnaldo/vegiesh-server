import express, { Router } from 'express';

// Import clients action from clients controller
import { index } from '../controllers/clients';

// Initialize the routers
const clients = Router();

// List of all clients
clients.get('/clients', index);

export default clients;
