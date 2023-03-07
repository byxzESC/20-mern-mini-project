const { AuthenticationError } = require("apollo-server-express");
const { Matchup, Tech } = require("../models");

const resolvers = {
  Query: {
    matchups: async () => {
      return Matchup.find();
    },
    techs: async () => {
      return Tech.find();
    },
    // getMatchup: async (parent, { id }) => {
    //   return Matchup.findById(id);
    // },
    
  },
};

module.exports = resolvers;