import BookInstance from "../Models/BookInstance.js";



export default {
  getAll: async (req, res, next) => {
    try {
      let list_bookInstance = await BookInstance.find();
      res.status(200).json(list_bookInstance);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  getOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let obtainedBookInstance = await BookInstance.findById(_id)
			.populate("Book")
			.exec().lean();

      res.status(200).json(obtainedBookInstance);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  saveOne: async (req, res, next) => {
	const reqBookInstance = req.body.BookInstance;
    
    try {
      const newBookInstance = await BookInstance.create(reqBookInstance);
      res.json(newBookInstance);
    } catch (err) {
      res.status(500).json(err); 
    }
  },

  updateOneById: async (req, res, next) => {
    const _id = req.params.id;
	const reqBookInstance = req.body.BookInstance;

    try {
      let result = await BookInstance.updateOne({ _id }, reqBookInstance);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  deleteOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let result = await BookInstance.deleteOne({ _id });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
