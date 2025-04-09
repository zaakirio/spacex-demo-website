import { Missions } from "./missions";
import { Ships } from "./ships";

const apiCalls = {
  queries: {
    ...Ships.query,
    ...Missions.query,
  },
  mutations: {
    ...Ships.mutations,
  },
};

export default apiCalls;