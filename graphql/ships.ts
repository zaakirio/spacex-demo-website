import gql from "graphql-tag";

const ships = gql`
  query ShipsWithMissions {
    shipsWithMissions {
      id
      name
      type
      class
      active
      home_port
      year_built
      image
      missionCount
      missionNames
    }
  }
`;

const shipsMissingAttributes = gql`
  query ShipsMissingAttributes($input: MissingAttributesInput!) {
    shipsMissingAttributes(input: $input) {
      shipId
      missingCount
    }
  }
`;

const query = { ships, shipsMissingAttributes };
const mutations = {};
const Ships = { query, mutations };
export { Ships };