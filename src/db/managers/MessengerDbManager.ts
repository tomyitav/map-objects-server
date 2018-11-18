import {AbstractDbManager} from "./AbstractDbManager";
import {DbManagerSettings} from "../types/DbManagerSettings";
import MessengerSchema from "../schema/MessengerSchema";
import {Injectable} from "injection-js";
import {MessengerDbConnector} from "../connectors/MessengerDbConnector";

@Injectable()
export default class MessengerDbManager extends AbstractDbManager {

    constructor(protected connector: MessengerDbConnector) {
        super(connector);
    }

    public async getMessengers() {
        const dbModel = await this.getDbModel();
        return this.dbModel.find();
    }

    // public async getUserLanguage(username: string){
    //     try{
    //         const dbModel = await this.getDbModel();
    //         const languageDocument: any = await dbModel.findOne({username});
    //         let language = (languageDocument === null || languageDocument === undefined) ? undefined : languageDocument.language;
    //         console.info('Got marker from db- ', language);
    //         return language;
    //     }
    //     catch(err) {
    //         console.error("Error in querying- " + err);
    //     }
    // }
    //
    // public async updateUserLanguage(l: Language): Promise<Language> {
    //     const languageDocument = await this.update({username: l.username}, l);
    //     return {username: languageDocument.username, language: languageDocument.language};
    // }
    //
    // public async removeUserLanguage(username: string): Promise<Language> {
    //     try{
    //         const dbModel = await this.getDbModel();
    //         await dbModel.deleteOne({username});
    //         console.info('Deleted username ' + username + " language");
    //         return {username, language: undefined};
    //     }
    //     catch (err) {
    //         console.error('Could not delete document- ', err);
    //     }
    // }

    protected getManagerSettings(): DbManagerSettings{
        return {
            collection: "map-marker",
            schema: MessengerSchema
        }
    }
}