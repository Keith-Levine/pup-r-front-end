import React from 'react';
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import DogCards from './components/DogCards';
import Buttons from './components/Buttons';
import Home from './components/Home';
import HomeHeader from './components/HomeHeader';
import Register from './components/Register'
import LogIn from './components/LogIn';
import Conversations from './components/Conversations';
import ChatScreen from './components/ChatScreen'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/demo'>
            <Header />
            <DogCards />
            <Buttons />
          </Route>
          <Route path='/chatDemo/:person'>
            <Header backButton='/chatDemo'/>
            <ChatScreen />
          </Route>
          <Route path='/chatDemo'>
            <Header backButton='/demo'/>
            <Conversations />
          </Route>
          <Route path='/register'>
            <HomeHeader />
            <Register />
          </Route>
          <Route path='/logIn'>
            <HomeHeader />
            <LogIn />
          </Route>
          <Route path='/'>
            <HomeHeader />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

<Header />