const schema = `
type Messenger {
 _id: String
 location: Position,
 kind: MarkerKind,
 ts: Float
}

input MessengerInput {
  try: Int!
}

# the schema allows the following query:
type Query {
  Messengers(ts: Float): [Messenger]
}

type Mutation {
  AddMessenger(input: MessengerInput): Messenger  
}

`;

export default schema;