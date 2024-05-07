import mongoose from "mongoose";

const BookInstanceSchema = new mongoose.Schema({


    returnDate: {
		type: Date,
		required: true,
		unique: true
	},
    status: {
		type: String,
		required: true,
		unique: true
	},
	book: {
		type: mongoose.Schema.Types.ObjectId ,
		required: true,
	},
});

export default mongoose.model("BookInstance", BookInstanceSchema);

