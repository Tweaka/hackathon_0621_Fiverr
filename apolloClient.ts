import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://team-rocket.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "ekE4DqQ5WuGRA621j2f6l2UfH3pZyG4IuKoK2rC1Cf7jdgubPBrZlY1K3IluaqRC",
  },
});

export default client;
