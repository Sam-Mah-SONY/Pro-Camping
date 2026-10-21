
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import App from './App.jsx'
import'./index.css'

const client = new ApolloClient({

    link: new HttpLink({
        uri: 'https://graphqlzero.almansi.me/api',
    }),
    cache: new InMemoryCache()
})

createRoot(document.getElementById('root')).render(
    <>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </>
) 