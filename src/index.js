import React from "react";
import ReactDOM from "react-dom";
import AppComponent from "./Components/AppComponent";

class App extends React.Component {
  render() {
    return <AppComponent />;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
