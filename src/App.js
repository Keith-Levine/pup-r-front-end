import React from 'react';
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
<<<<<<< HEAD
import DogCards from './components/DogCards/DogCards';
import Home from './components/Home/Home';
import HomeHeader from './components/HomeHeader/HomeHeader';
import Register from './components/Register/Register'
import LogIn from './components/LogIn/LogIn';
import Conversations from './components/Conversations/Conversations';
import ChatScreen from './components/ChatScreen/ChatScreen'
import ProfileDemo from './components/ProfileDemo/ProfileDemo'
import './App.css';
=======
import DogCards from './components/DogCards';
import Buttons from './components/Buttons';
import Home from './components/Home';
import HomeHeader from './components/HomeHeader';
// import Register from './components/Register'
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Conversations from './components/Conversations';
import ChatScreen from './components/ChatScreen'
import { Container } from 'react-bootstrap';
>>>>>>> 2cdd4c5c4212c90cdcad376156d2f4f2926f29e1

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* go to pup-r demo */}
          <Route path='/demo'>
            <Header />
            <DogCards />
<<<<<<< HEAD
          </Route>
          {/* porfile page demo */}
          <Route path='/profileDemo'>
            <Header/>
            <ProfileDemo />
=======
            <Buttons />
>>>>>>> 2cdd4c5c4212c90cdcad376156d2f4f2926f29e1
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
            <Container 
                className='d-flex align-items-center'
                style={{ minHeight: '100vh'}}
            >
                <div 
                    className='w-100' 
                    style={{maxWidth: '400px'}}
                >
                    <SignUp />
                </div>
                
            </Container>
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