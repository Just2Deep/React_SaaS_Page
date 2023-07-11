import "./App.css";
import "./index.css";

import {
  Footer,
  Blog,
  Header,
  Possibility,
  WhatGPT4,
  Features,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT4 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
