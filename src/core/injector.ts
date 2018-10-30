import "zone.js";
import "reflect-metadata";
import {Server} from "../server";
import {AbstractLogger} from "./logger/AbstractLogger";
import {AbstractSetting} from "./config/AbstractSetting";
import {Setting} from "./config/Setting";
import {Logger} from "./logger/Logger";
import {Injector, ReflectiveInjector} from 'injection-js';
import {AbstractMarkerModel} from "../model/markers/AbstractMarkerModel";
import {MarkerModel} from "../model/markers/MarkerModel";

let injector: Injector = ReflectiveInjector.resolveAndCreate([
    {provide: AbstractLogger, useClass: Logger},
    {provide: AbstractSetting, useClass: Setting},
    {provide: AbstractMarkerModel, useClass: MarkerModel},
    {provide: Server, useClass: Server}
    ]);

export default injector;
