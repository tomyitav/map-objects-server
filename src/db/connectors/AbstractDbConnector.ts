import * as Mongoose from 'mongoose';
import {AbstractSetting} from "../../core/config/AbstractSetting";
import {DbConnectionParams} from "../types/DbConnectionParams";
import {ConnectionOptions} from "mongoose";

(<any>Mongoose).Promise = global.Promise;

export abstract class AbstractDbConnector {

    protected connectionEnsured: Promise<any>;

    constructor(protected settings: AbstractSetting) {
        this.createConnectionPromise();
    }

    public async ensureDbConnection() {
        return this.connectionEnsured;
    }

    protected abstract getConnectionParams(): DbConnectionParams;

    private createConnectionPromise() {
        const {dbName} = this.getConnectionParams();
        this.connectionEnsured = this.connectToDb(dbName);
    }

    private async connectToDb(name: string) {
        return new Promise((resolve, reject) => {
            const {urls, replicaName} = this.getConnectionParams();
            const options: ConnectionOptions = this.createConnectionOptions();
            Mongoose.connect(`mongodb://${urls}/${name}?ssl=true&replicaSet=${replicaName}&authSource=admin`, options)
                .then((res) => {
                    console.log('Connected to db- ', res);
                    resolve(res)
                })
                .catch((err) => {
                    console.error('Got error in connecting- ', err);
                    reject(err);
                })

        })
    }

    protected createConnectionOptions(): ConnectionOptions {
        const connectionOptions: ConnectionOptions = {
            reconnectTries: Number.MAX_SAFE_INTEGER,
            authSource: 'admin',
            user: this.settings.getConfig().db.user,
            pass: this.settings.getConfig().db.pass,
        }
        return connectionOptions;
    }
}