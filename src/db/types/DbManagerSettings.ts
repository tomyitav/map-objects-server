import * as Mongoose from 'mongoose';

export interface DbManagerSettings {
    collection: string,
    schema: Mongoose.Schema
}

