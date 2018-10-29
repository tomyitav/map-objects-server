// import {AbstractDbManager} from "./AbstractDbManager";
// import {DbManagerSettings} from "../types/DbManagerSettings";
// import {AbstractLogger} from "../../core/logger/AbstractLogger";
// import {TrelloList} from "../../interfaces/types";
// import TrelloListSchema from "../schema/TrelloList.schema";
// import {AbstractDbConnector} from "../connectors/AbstractDbConnector";
// import {Injectable} from "injection-js";
//
// @Injectable()
// export default class ListsDbManager extends AbstractDbManager {
//
//     constructor(protected connector: AbstractDbConnector, protected logger: AbstractLogger) {
//         super(connector, logger);
//     }
//
//     public async getUserList(username: string){
//         try{
//             const dbModel = await this.getDbModel();
//             const listDocument: any = await dbModel.findOne({username});
//             let trelloList = (listDocument === null || listDocument === undefined) ? undefined : listDocument.listId;
//             console.log('Got list from db- ', trelloList);
//             return trelloList;
//         }
//         catch(err) {
//             console.error("Error in querying- ", err);
//         }
//     }
//
//     public async updateUserList(l: TrelloList): Promise<TrelloList> {
//         const listDocument = await this.update({username: l.username}, l);
//         return {username: listDocument.username, listId: listDocument.listId};
//     }
//
//     public async removeUserList(username: string): Promise<TrelloList> {
//         try{
//             const dbModel = await this.getDbModel();
//             await dbModel.deleteOne({username});
//             this.logger.info('Deleted username ' + username + " list");
//             return {username, listId: undefined};
//         }
//         catch (err) {
//             console.error('Could not delete document- ', err);
//         }
//     }
//
//     protected getManagerSettings(): DbManagerSettings{
//         return {
//             collection: "lists",
//             schema: TrelloListSchema
//         }
//     }
// }