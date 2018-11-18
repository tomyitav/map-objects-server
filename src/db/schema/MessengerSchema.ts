import * as Mongoose from 'mongoose';

const MessengerSchema:  Mongoose.Schema = new Mongoose.Schema({
    location: {
        lat: {type: Number, required: true},
        lng: {type: Number, required: true},
    },
    kind: {type: String, required: true},
    modified: {type: Date, default: Date.now}
});

export default MessengerSchema;