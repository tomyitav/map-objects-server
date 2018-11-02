import {IConfig} from "./IConfig";
import * as dotenv from "dotenv";

export abstract class AbstractSetting {

    public abstract getConfig(): IConfig;
}