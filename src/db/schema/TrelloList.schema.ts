import * as Mongoose from 'mongoose';

const TrelloListSchema:  Mongoose.Schema = new Mongoose.Schema({
    username: {type: String, required: true, unique: true, index: true},
    listId: {type: String, required: true}
});

export default TrelloListSchema;