import { Platform } from "react-native";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

export const client = new ApolloClient({
  uri:
    Platform.OS === "ios"
      ? "http://127.0.0.1:3000/graphql"
      : "http://10.0.2.2:3000/graphql",
  cache,
});
