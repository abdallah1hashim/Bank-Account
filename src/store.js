import { createStore } from "redux";
import accountReducer from "./Features/Account/AccountSlice";

const store = createStore(accountReducer);

export default store;
