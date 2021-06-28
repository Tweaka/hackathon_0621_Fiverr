import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";

import client from "../apolloClient";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
