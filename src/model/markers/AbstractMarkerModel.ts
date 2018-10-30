import {MapMarker} from "../../interfaces/types";

export abstract class AbstractMarkerModel {
    public abstract getMarkers(ts?: number): Promise<Array<MapMarker>>;
}