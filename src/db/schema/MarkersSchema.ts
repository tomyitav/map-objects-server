import * as Mongoose from 'mongoose';

const MarkersSchema:  Mongoose.Schema = new Mongoose.Schema({
    location: {
        lat: {type: Number, required: true},
        lng: {type: Number, required: true},
    },
    kind: {type: String, required: true},
    ts: {type: Number, required: true}
});

export default MarkersSchema;