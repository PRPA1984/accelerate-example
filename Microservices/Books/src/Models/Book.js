import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({


    tittle: {
		type: String,
		required: true,
		unique: true
	},
    summary: {
		type: String,
		required: true,
		unique: true
	},
	genre: {
		type: mongoose.Schema.Types.ObjectId ,
		required: true,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId ,
		required: true,
	},
});

export default mongoose.model("Book", BookSchema);

