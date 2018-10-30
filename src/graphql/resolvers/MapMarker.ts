import {AppContext} from "../../interfaces/AppContext";
import {MapMarker, MapMarkersQueryArgs} from "../../interfaces/types";
import {AbstractMarkerModel} from "../../model/markers/AbstractMarkerModel";

const resolveFunctions = {
    Query: {
        MapMarkers(_, args: MapMarkersQueryArgs, context: AppContext) : Promise<Array<MapMarker>>{
            const markerModel: AbstractMarkerModel= context.markersModel;
            return markerModel.getMarkers();
        }
    },
}

export default resolveFunctions;