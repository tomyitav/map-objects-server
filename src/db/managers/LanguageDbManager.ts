// import {AbstractDbManager} from "./AbstractDbManager";
// import {DbManagerSettings} from "../types/DbManagerSettings";
// import {AbstractLogger} from "../../core/logger/AbstractLogger";
// import LanguageSchema from "../schema/Language.schema";
// import {Language} from "../../interfaces/types";
// import {AbstractDbConnector} from "../connectors/AbstractDbConnector";
// import {Injectable} from "injection-js";
//
// @Injectable()
// export default class LanguageDbManager extends AbstractDbManager {
//
//     constructor(protected connector: AbstractDbConnector, protected logger: AbstractLogger) {
//         super(connector, logger);
//     }
//
//     public async getUserLanguage(username: string){
//         try{
//             const dbModel = await this.getDbModel();
//             const languageDocument: any = await dbModel.findOne({username});
//             let language = (languageDocument === null || languageDocument === undefined) ? undefined : languageDocument.language;
//             this.logger.info('Got language from db- '+ language);
//             return language;
//         }
//         catch(err) {
//             console.error("Error in querying- " + err);
//         }
//     }
//
//     public async updateUserLanguage(l: Language): Promise<Language> {
//         const languageDocument = await this.update({username: l.username}, l);
//         return {username: languageDocument.username, language: languageDocument.language};
//     }
//
//     public async removeUserLanguage(username: string): Promise<Language> {
//         try{
//             const dbModel = await this.getDbModel();
//             await dbModel.deleteOne({username});
//             this.logger.info('Deleted username ' + username + " language");
//             return {username, language: undefined};
//         }
//         catch (err) {
//             console.error('Could not delete document- ', err);
//         }
//     }
//
//     protected getManagerSettings(): DbManagerSettings{
//         return {
//             collection: "languages",
//             schema: LanguageSchema
//         }
//     }
// }