import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./css/App.css";
import Home from "./components/home/Home";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
