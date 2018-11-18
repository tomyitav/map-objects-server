import {AppContext} from "../../interfaces/AppContext";
import {Messenger, MessengersQueryArgs} from "../../interfaces/types";
import {MessengerModel} from "../../model/messenger/MessengerModel";

const resolveFunctions = {
    Query: {
        Messengers(_, args: MessengersQueryArgs, context: AppContext) : Promise<Array<Messenger>>{
            const markerModel: MessengerModel= context.messengersModel;
            return markerModel.getMarkers();
        }
    },
}

export default resolveFunctions;