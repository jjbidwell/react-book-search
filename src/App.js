import React from 'react';
import './App.css';
import Searchresults from "./componenents/Searchresults/searchresults"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/search">
      <Searchresults/>
    </Route>
    <Route exact path="/">
      <Redirect to="/search"/>
    </Route>
    <Route exact path="/saved">
      <h1>Saved</h1>
    </Route>
    <Route path="*">
      <h1>you fool. you absolute buffoon. you think you can challenge me in my own realm? you think you can rebel against my authority? you dare come into my house and upturn my dining chairs and spill coffee grounds in my Keurig? you thought you were safe in your chain mail armor behind that screen of yours. I will take these laminate wood floor boards and destroy you. I didn’t want war. but i didn’t start it.</h1>
    </Route>
    </Switch>

    </BrowserRouter>
  );
}

export default App;
