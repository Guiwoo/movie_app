import React from "react";
import {HashRouter, Route} from "react-router-dom"
import "./App.css";
import Navigation from "./components/Navigation";
import about from "./routes/about"
import home from "./routes/home"
import detail from "./routes/detail"

function App() {
  return <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={home}/>
    <Route path="/about" component={about}/>
    <Route path="/movie-detail" component={detail}/>
  </HashRouter>
}

export default App;