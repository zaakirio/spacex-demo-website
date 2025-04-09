import gql from "graphql-tag";

const missions = gql`
  query Missions($input: MissionsInput!) {
    missions(input: $input) {
      name
    }
  }
`;

const query = { missions };
const mutations = {};
const Missions = { query, mutations };
export { Missions };