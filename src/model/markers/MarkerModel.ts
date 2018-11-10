import {AbstractMarkerModel} from "./AbstractMarkerModel";
import {MapMarker} from "../../interfaces/types";
import {Injectable} from "injection-js";
import MarkerDbManager from "../../db/managers/MarkerDbManager";

@Injectable()
export class MarkerModel extends AbstractMarkerModel{

    constructor(private dbManager: MarkerDbManager) {
        super();
    }

    public getMarkers(ts?: number): Promise<Array<MapMarker>> {
        return this.dbManager.getMapMarkers();
    }
}