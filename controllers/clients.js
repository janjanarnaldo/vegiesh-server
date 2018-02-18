import Client from '../models/client';

export const index = (req, res, next) => {
  const searchName = req.query.name || '';
  if (!searchName) {
    res.json({clients: []});
  } else {
    // find all clients and return json response
    Client.find({ name: { $regex: searchName, $options: 'i' } }).lean().exec((err, clients) => res.json(
      // Iterate through each client
      {clients: clients.map(client => ({
        ...client
      }))}
    ));
  }
};

export const one = (req, res, next) => {
  Client.findById(req.params._id).lean().exec((err, client) => res.json(
    {client}
  ));
};

export const save = (req, res, next) => {

}

export const remove = (req, res, next) => {

}
