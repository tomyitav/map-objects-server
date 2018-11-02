import "zone.js";
import "reflect-metadata";
import {Server} from "../server";
import {AbstractSetting} from "./config/AbstractSetting";
import {Setting} from "./config/Setting";
import {Injector, ReflectiveInjector} from 'injection-js';
import {AbstractMarkerModel} from "../model/markers/AbstractMarkerModel";
import {MarkerModel} from "../model/markers/MarkerModel";
import MarkerDbManager from "../db/managers/MarkerDbManager";
import {MarkersDbConnector} from "../db/connectors/MarkersDbConnector";

let injector: Injector = ReflectiveInjector.resolveAndCreate([
    {provide: AbstractSetting, useClass: Setting},
    {provide: AbstractMarkerModel, useClass: MarkerModel},
    {provide: MarkersDbConnector, useClass: MarkersDbConnector},
    {provide: MarkerDbManager, useClass: MarkerDbManager},
    {provide: Server, useClass: Server}
    ]);

export default injector;
