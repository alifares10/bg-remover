import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="text-white rounded-lg flex flex-col justify-center items-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
