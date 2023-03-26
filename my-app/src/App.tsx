import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./components/Redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
          <GlobalStyle />
          <Header />
          <Main />
          <Footer />
      </Provider>
    </>
  );
}

export default App;
