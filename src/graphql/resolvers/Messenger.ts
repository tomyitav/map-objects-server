import {AppContext} from "../../interfaces/AppContext";
import {Messenger, MessengersQueryArgs} from "../../interfaces/types";
import {MessengerModel} from "../../model/messenger/MessengerModel";

const resolveFunctions = {
    Query: {
        Messengers(_, args: MessengersQueryArgs, context: AppContext) : Promise<Array<Messenger>>{
            const messengerModel: MessengerModel= context.messengersModel;
            return messengerModel.getMessengers();
        }
    },

    Mutation: {
        AddMessenger(_, args: any, context: AppContext): Promise<Messenger> {
            console.log('************logging mutation************')
            console.log('************args************', args)
            return new Promise<Messenger>((res) => {
                const messenger: Messenger = {
                    location: {
                        lat: 1,
                        lng: 1
                    },
                    _id: "1",
                    kind: "MESSENGER" as any,
                    ts: 3,
                }
                res(
                    messenger
                )
            })
        }
    }
}

export default resolveFunctions;