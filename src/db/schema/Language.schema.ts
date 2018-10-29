import * as Mongoose from 'mongoose';

const LanguageSchema:  Mongoose.Schema = new Mongoose.Schema({
    username: {type: String, required: true, unique: true, index: true},
    language: {type: String, required: true}
});

export default LanguageSchema;