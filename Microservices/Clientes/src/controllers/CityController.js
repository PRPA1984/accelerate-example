import City from "../Models/City.js";

import axios from "axios";


export default {
  getAll: async (req, res, next) => {
    try {
      let list_city = await City.find();
      res.status(200).json(list_city);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  getOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let obtainedCity = await City.findById(_id)
			.exec().lean();

      res.status(200).json(obtainedCity);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  saveOne: async (req, res, next) => {
	const reqCity = req.body.City;
    
    try {
      const newCity = await City.create(reqCity);
      res.json(newCity);
    } catch (err) {
      res.status(500).json(err); 
    }
  },

  updateOneById: async (req, res, next) => {
    const _id = req.params.id;
	const reqCity = req.body.City;

    try {
      let result = await City.updateOne({ _id }, reqCity);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  deleteOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let result = await City.deleteOne({ _id });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
