import Genre from "../Models/Genre.js";



export default {
  getAll: async (req, res, next) => {
    try {
      let list_genre = await Genre.find();
      res.status(200).json(list_genre);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  getOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let obtainedGenre = await Genre.findById(_id)
			.exec().lean();

      res.status(200).json(obtainedGenre);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  saveOne: async (req, res, next) => {
	const reqGenre = req.body.Genre;
    
    try {
      const newGenre = await Genre.create(reqGenre);
      res.json(newGenre);
    } catch (err) {
      res.status(500).json(err); 
    }
  },

  updateOneById: async (req, res, next) => {
    const _id = req.params.id;
	const reqGenre = req.body.Genre;

    try {
      let result = await Genre.updateOne({ _id }, reqGenre);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  deleteOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let result = await Genre.deleteOne({ _id });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
