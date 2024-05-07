import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({


    name: {
		type: String,
		required: true,
		unique: true
	},
    lastname: {
		type: String,
		required: true,
		unique: true
	},
    birthDay: {
		type: Date,
		required: true,
		unique: true
	},
});

export default mongoose.model("Author", AuthorSchema);

