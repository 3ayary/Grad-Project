import { configureStore } from "@reduxjs/toolkit";
import userreducer  from "./features/UserSlice";
export const Store = configureStore({
reducer:{
    user: userreducer
}
})