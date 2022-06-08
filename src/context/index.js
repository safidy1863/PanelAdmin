import { configureStore } from "@reduxjs/toolkit";
import { authentication } from "./authentication";
import { clientContext } from "./clientContext";

export const appContext = configureStore({
    reducer : {
        authentication : authentication.reducer,
        clientContext : clientContext.reducer
    }
})