import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Store, Persistor } from "./Redux/Store.jsx";
// const GoogleClientId = import.meta.env.VITE_GOOGLE_ID;
const GoogleClientId = import.meta.env.VITE_GOOGLE_ID;
import { ChakraBaseProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={Persistor}>
    <ChakraBaseProvider>
      <GoogleOAuthProvider clientId={GoogleClientId}>
        <QueryClientProvider client={queryClient}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </QueryClientProvider>
      </GoogleOAuthProvider>
      </ChakraBaseProvider>
    </PersistGate>
  </Provider>
);
