import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./stlye";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Fragment>

        <GlobalStyle />

        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route  path='/' exact element={<Home />} />
              <Route  path='/detail/:id' exact element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </Provider>

      </Fragment>

    );
  }
}

export default App;
