import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AppDraggble from "./slider/draggableElement";
import FooterComponents from "./components/footerComponents";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
ReactDOM.render(
    <React.StrictMode>
        <AppDraggble/>
    </React.StrictMode>,
    document.getElementById("root1"));
ReactDOM.render(
    <React.StrictMode>
        <FooterComponents/>
    </React.StrictMode>,
    document.getElementById("root2"));


serviceWorker.unregister();
