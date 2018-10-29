import {AbstractSetting} from "./AbstractSetting";
import {IConfig} from "./IConfig";
import {Injectable} from "injection-js";

@Injectable()
export class Setting extends AbstractSetting {

    private settings: IConfig;
    constructor() {
        super();
        this.settings = {
            server: {
                port: process.env.serverPort || 8080,
            },
            db: {
                urls: process.env.DB_URLS,
                replicaName: process.env.REPLICA_NAME,
                user: process.env.USERNAME,
                pass: process.env.PASSWORD
            }
        }
    }

    public getConfig(): IConfig {
        return this.settings;
    }
}
