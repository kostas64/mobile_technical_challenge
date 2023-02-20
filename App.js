import Router from "./src/router";
import { useEffect } from "react";
import { client } from "./src/apollo/index";
import { ApolloProvider } from "@apollo/client";
import SplashScreen from "react-native-splash-screen";

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
