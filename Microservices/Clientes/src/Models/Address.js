import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({


    address: {
		type: String,
		required: true,
		unique: true
	},
    number: {
		type: Integer,
		required: true,
		unique: true
	},
    city: {
		type: String,
		required: true,
		unique: true
	},
	addressCity: {
		type: mongoose.Schema.Types.ObjectId ,
		required: true,
	},
    bookAddress: {
		type: String,
		required: false,
		ref: "BookInstance"
	},
});

export default mongoose.model("Address", AddressSchema);

