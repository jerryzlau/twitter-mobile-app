// ! can also used as validations, stating that field is requied
// ! means that the ID is required, if it's not passed in, don't fetch

export default`
  scalar Date 
  
  type Status {
    message: String!
  }
  
  type Tweet {
    _id: ID!,
    text: String!,
    createdAt: Date!,
    updatedAt: Date!
  }

  type Query {
    getTweet(_id: ID!): Tweet,
    getTweets: [Tweet] 
  }

  type Mutation {
    createTweet(text: String!): Tweet,
    updateTweet(_id: ID!, text: String): Tweet,
    deleteTweet(_id: ID!): Status
  }

  schema {
    query: Query,
    mutation: Mutation
  }
`;