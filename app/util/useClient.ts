import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const useClient = (): ApolloClient<NormalizedCacheObject> => {
  const authLink = setContext(async (_, { headers }) => {
    return {
      headers: {
        ...headers,
      },
    };
  });

  const httpLink = createHttpLink({
    uri: "http://localhost:3000/api/graphql",
  });

  const client = new ApolloClient({
    name: `next-website`,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return client;
};

export default useClient;
