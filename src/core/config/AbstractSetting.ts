import {IConfig} from "./IConfig";
import * as dotenv from "dotenv";

export abstract class AbstractSetting {

    constructor() {
        dotenv.config({path: "../../.env"});
    }

    public abstract getConfig(): IConfig;
}