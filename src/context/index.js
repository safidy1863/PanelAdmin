import { configureStore } from "@reduxjs/toolkit";
import { clientContext } from "./clientContext";

export const appContext = configureStore({
    reducer : {
        clientContext : clientContext.reducer
    }
})