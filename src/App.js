import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";


function App() {
  return <div>
    <Header></Header>
    <main>
      <Meals></Meals>
    </main>
  </div>;
}

export default App;