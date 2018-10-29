import {AbstractSetting} from "../../core/config/AbstractSetting";
import {AbstractLogger} from "../../core/logger/AbstractLogger";
import {AbstractDbConnector} from "./AbstractDbConnector";
import {DbConnectionParams} from "../types/DbConnectionParams";
import {Injectable} from "injection-js";

@Injectable()
export class SettingsDbConnector extends AbstractDbConnector{

    constructor(public settings: AbstractSetting, public logger: AbstractLogger) {
        super(settings, logger);
    }

    public getConnectionParams(): DbConnectionParams {
        return {
            urls: this.settings.getConfig().db.urls,
            replicaName: this.settings.getConfig().db.replicaName,
            dbName: "settings"
        };
    };

}