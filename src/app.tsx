import * as React from "react";
import { Provider } from 'react-redux';
import store from "./store/store";
import FirstComponent from "./components/firstComponent";
//import { ReduxComponent } from "./components/reduxComponent";
import SecondComponent from "./components/secondComponent";
import ThirdComponent from "./components/thirdComponent";
import { Card } from "./components/card";
import { Clock } from "./components/clock";

export class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h1>React Redux</h1>
                    <SecondComponent />
                    <ThirdComponent />
                    <Card title="Title" paragraph="Paragraph" />
                    <Clock />
                </div>
            </Provider>
        );
    }
}