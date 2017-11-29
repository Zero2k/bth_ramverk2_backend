export default `
  type Post {
    id: Int!
    title: String!
    description: String!
    text: String!
  }

  type Query {
    allReports: [Post!]!
    singleReport(id: Int!): Post
  }
`;
