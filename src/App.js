import React from 'react';
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import DogCards from './components/DogCards/DogCards';
import Home from './components/Home/Home';
import HomeHeader from './components/HomeHeader/HomeHeader';
import Register from './components/Register/Register'
import LogIn from './components/LogIn/LogIn';
import Conversations from './components/Conversations/Conversations';
import ChatScreen from './components/ChatScreen/ChatScreen'
import ProfileDemo from './components/ProfileDemo/ProfileDemo'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* go to pup-r demo */}
          <Route path='/demo'>
            <Header />
            <DogCards />
          </Route>
          {/* porfile page demo */}
          <Route path='/profileDemo'>
            <Header/>
            <ProfileDemo />
          </Route>
          {/* chat with match demo page */}
          <Route path='/chatDemo/:person'>
            <Header backButton='/chatDemo'/>
            <ChatScreen />
          </Route>
          {/* All chats demo page */}
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