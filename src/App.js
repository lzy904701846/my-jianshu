import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { GlobalStyle } from "./stlye";
import Header from "./common/header";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Fragment>

        <GlobalStyle />

        <Provider store={store}>
          <Header />
          <div>
            hello
          </div>
        </Provider>

      </Fragment>

    );
  }
}

export default App;
