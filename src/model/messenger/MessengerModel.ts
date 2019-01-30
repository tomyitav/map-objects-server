import {Injectable} from "injection-js";
import MessengerDbManager from "../../db/managers/MessengerDbManager";
import {Messenger} from "../../interfaces/types";

@Injectable()
export class MessengerModel{

    constructor(private dbManager: MessengerDbManager) {
    }

    public getMessengers(ts?: number): Promise<Array<Messenger>> {
        return this.dbManager.getMessengers();
    }

}