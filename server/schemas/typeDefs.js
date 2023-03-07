const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Matchup {
    _id: ID
    tech1: String!
    tech2: String!
    tech1_votes: Int
    tech2_votes: Int
  }

  type Tech {
    _id: ID
    name: String!
  }

  type Query {
    matchups: [Matchup]
    matchup(_id: ID!): Matchup
    techs: [Tech]
    tech(name: String!): Tech
  }

  
`;

module.exports = typeDefs;