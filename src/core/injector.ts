import "zone.js";
import "reflect-metadata";
import {Server} from "../server";
import {AbstractSetting} from "./config/AbstractSetting";
import {Setting} from "./config/Setting";
import {Injector, ReflectiveInjector} from 'injection-js';
import {MessengerModel} from "../model/messenger/MessengerModel";
import MessengerDbManager from "../db/managers/MessengerDbManager";
import {MessengerDbConnector} from "../db/connectors/MessengerDbConnector";

let injector: Injector = ReflectiveInjector.resolveAndCreate([
    {provide: AbstractSetting, useClass: Setting},
    Server,
    MessengerDbConnector,
    MessengerDbManager,
    MessengerModel
    ]);

export default injector;
