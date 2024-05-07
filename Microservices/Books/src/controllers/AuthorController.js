import Author from "../Models/Author.js";



export default {
  getAll: async (req, res, next) => {
    try {
      let list_author = await Author.find();
      res.status(200).json(list_author);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  getOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let obtainedAuthor = await Author.findById(_id)
			.exec().lean();

      res.status(200).json(obtainedAuthor);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  saveOne: async (req, res, next) => {
	const reqAuthor = req.body.Author;
    
    try {
      const newAuthor = await Author.create(reqAuthor);
      res.json(newAuthor);
    } catch (err) {
      res.status(500).json(err); 
    }
  },

  updateOneById: async (req, res, next) => {
    const _id = req.params.id;
	const reqAuthor = req.body.Author;

    try {
      let result = await Author.updateOne({ _id }, reqAuthor);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  deleteOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let result = await Author.deleteOne({ _id });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
