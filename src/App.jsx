import React from "react";
import Header from "./components/Header";
import RandomJoke from "./components/RandomJoke";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <RandomJoke />
      </main>
    </>
  );
}

export default App;
