import "./App.css";
import HomePage from "./Pages/HomePge";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql-weather-api.herokuapp.com/",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <HomePage />
      </div>
    </ApolloProvider>
  );
}

export default App;
