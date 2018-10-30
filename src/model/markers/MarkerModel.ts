import {AbstractMarkerModel} from "./AbstractMarkerModel";
import {MapMarker, MarkerKind} from "../../interfaces/types";
import {Injectable} from "injection-js";

@Injectable()
export class MarkerModel extends AbstractMarkerModel{
    public getMarkers(ts?: number): Promise<Array<MapMarker>> {
        return new Promise<Array<MapMarker>>((res, rej) => {
            setTimeout(() => {
                const markers: Array<MapMarker> = [
                    {
                        id_: "ekomoer",
                        location: {
                            lat: 1034,
                            lng: 1034
                        },
                        kind: "MESSENGER" as any,
                        ts: 2304592039,
                    }
                ];
                res(markers)
            }, 2000)
        });
    }
}