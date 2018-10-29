import {DbManagerSettings} from "../types/DbManagerSettings";
import {AbstractDbConnector} from "../connectors/AbstractDbConnector";
import {AbstractLogger} from "../../core/logger/AbstractLogger";
import * as Mongoose from 'mongoose';

export abstract class AbstractDbManager {

    protected dbModel: Mongoose.Model<any>;
    protected dbModelInitialized: Promise<any>;
    constructor(protected connector: AbstractDbConnector, protected logger: AbstractLogger) {
        this.dbModelInitialized = this.initializeManager();
    }

    protected abstract getManagerSettings(): DbManagerSettings;

    protected async update(conditions, entity) {
        try{
            const dbModel = await this.getDbModel();
            await dbModel.update(conditions, entity, {upsert: true, setDefaultsOnInsert: true});
            console.log('Entity saved to DB- ', entity);
            return entity;
        }
        catch (err) {
            console.error('could not save to DB- ', err);
        }
    }

    protected async getDbModel() {
        try {
            await this.dbModelInitialized;
            return this.dbModel
        }
        catch (e) {
            console.error('got error in creating Db Manger- ', e)
        }
    }

    protected async initializeManager() {
        const {collection, schema} = this.getManagerSettings();
        try {
            await this.connector.ensureDbConnection();
            this.dbModel = Mongoose.model(collection, schema);
        }
        catch(err) {
            console.error("Could not create manager- ", err);
        }
    }
}