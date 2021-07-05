import React from 'react';
import Header from "./components/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path='/chat'>

          </Route>
          <Route path='/'>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

<Header />