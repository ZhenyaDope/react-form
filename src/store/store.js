import { createStore } from "redux";

// Root reducer
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

export default store;
