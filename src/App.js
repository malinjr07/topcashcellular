import React from "react";
import Heading from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";

function App() {
  return (
    <>
      <a href="/" className="promotion top-fix green">
        <p>Get 5% extra bonus.</p>
      </a>
      <Heading />
      <a href="/" className="promotion grey">
        <p>Get 5% extra bonus.</p>
      </a>

      <Home/>

      <Footer />
    </>
  );
}

export default App;
