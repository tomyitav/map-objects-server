const schema = `
type MapMarker {
 id_: String
 location: Position,
 kind: MarkerKind,
 ts: Float
}

# the schema allows the following query:
type Query {
  MapMarkers(ts: Float): [MapMarker]
}

`;

export default schema;