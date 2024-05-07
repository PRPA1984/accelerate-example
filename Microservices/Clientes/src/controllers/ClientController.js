import Client from "../Models/Client.js";

import axios from "axios";


export default {
  getAll: async (req, res, next) => {
    try {
      let list_client = await Client.find();
      res.status(200).json(list_client);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  getOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let obtainedClient = await Client.findById(_id)
			.populate("Address")
			.exec().lean();

			obtainedClient.rentedBook = await axios.get(
				process.env.BOOKS_MICROSERVICE_URL + "/api/entity/BookInstance"+rentedBook
			)
			.then((responseData) => responseData.data)
			.catch((e) => res.send(e));

      res.status(200).json(obtainedClient);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  saveOne: async (req, res, next) => {
	const reqClient = req.body.Client;
    
    try {
      const newClient = await Client.create(reqClient);
      res.json(newClient);
    } catch (err) {
      res.status(500).json(err); 
    }
  },

  updateOneById: async (req, res, next) => {
    const _id = req.params.id;
	const reqClient = req.body.Client;

    try {
      let result = await Client.updateOne({ _id }, reqClient);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  deleteOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let result = await Client.deleteOne({ _id });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
