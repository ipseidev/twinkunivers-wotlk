import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://twinkunivers-wotlk.herokuapp.com/graphql",
    cache: new InMemoryCache(),
});

export default client;
