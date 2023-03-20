import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./components/Store/Store";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
