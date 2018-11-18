const schema = `
type Messenger {
 _id: String
 location: Position,
 kind: MarkerKind,
 ts: Float
}

# the schema allows the following query:
type Query {
  Messengers(ts: Float): [Messenger]
}

`;

export default schema;