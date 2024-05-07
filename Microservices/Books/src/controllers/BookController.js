import Book from "../Models/Book.js";



export default {
  getAll: async (req, res, next) => {
    try {
      let list_book = await Book.find();
      res.status(200).json(list_book);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  getOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let obtainedBook = await Book.findById(_id)
			.populate("Author")
			.populate("Genre")
			.exec().lean();

      res.status(200).json(obtainedBook);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  saveOne: async (req, res, next) => {
	const reqBook = req.body.Book;
    
    try {
      const newBook = await Book.create(reqBook);
      res.json(newBook);
    } catch (err) {
      res.status(500).json(err); 
    }
  },

  updateOneById: async (req, res, next) => {
    const _id = req.params.id;
	const reqBook = req.body.Book;

    try {
      let result = await Book.updateOne({ _id }, reqBook);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  deleteOneById: async (req, res, next) => {
    const _id = req.params.id;
    try {
      let result = await Book.deleteOne({ _id });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },

};
