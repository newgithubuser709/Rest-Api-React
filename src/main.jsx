import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./app/Store.jsx";

import { BrowserRouter } from "react-router-dom";

import { ContextProvider } from "./context/ContextApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter
        //  basename={process.env.PUBLIC_URL}
        >
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ContextProvider>
);
