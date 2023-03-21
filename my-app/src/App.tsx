import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <GlobalStyle />
        <Header />
        <Main />
        <Footer />
    </>
  );
}

export default App;
