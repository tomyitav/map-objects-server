import {AppContext} from "../../interfaces/AppContext";
import {GetMapMarkersQueryArgs, MapMarker} from "../../interfaces/types";
import {AbstractMarkerModel} from "../../model/markers/AbstractMarkerModel";

const resolveFunctions = {
    Query: {
        getMapMarkers (_, args: GetMapMarkersQueryArgs, context: AppContext) : Promise<Array<MapMarker>>{
            const markerModel: AbstractMarkerModel= context.markersModel;
            return markerModel.getMarkers();
        }
    },
}

export default resolveFunctions;