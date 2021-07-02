import "./styles.css";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import rootReducer from "./services/Reducers/index.js";

const rootElement = document.getElementById("root");
const store = createStore(rootReducer);
console.warn("store data", store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
