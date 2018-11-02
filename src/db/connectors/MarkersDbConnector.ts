import {AbstractSetting} from "../../core/config/AbstractSetting";
import {AbstractDbConnector} from "./AbstractDbConnector";
import {DbConnectionParams} from "../types/DbConnectionParams";
import {Injectable} from "injection-js";

@Injectable()
export class MarkersDbConnector extends AbstractDbConnector{

    constructor(public settings: AbstractSetting) {
        super(settings);
    }

    public getConnectionParams(): DbConnectionParams {
        return {
            urls: this.settings.getConfig().db.urls,
            replicaName: this.settings.getConfig().db.replicaName,
            dbName: "test"
        };
    };

}