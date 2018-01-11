export default `

type Status {
  message: String!
}

type Todo {
  _id: ID!
  title: String!
  text: String!
  active: Boolean!
}

type Query {
  allTodos: [Todo!]!
  singleTodo(_id: ID!): Todo
}

type Mutation {
  createTodo(title: String!, text: String!): Todo
  updateTodo(_id: ID!, title: String!, text: String!, active: Boolean!): Todo
  deleteTodo(_id: ID!): Status
}
`;
