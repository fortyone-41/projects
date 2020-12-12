import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Messages from './components/Content/Messages/Messages';
import {Route,  BrowserRouter } from 'react-router-dom';



const App = (props) => {
  const [postsArray, setPostArray] = React.useState(props.posts)
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path="/profile" render={( props) => <Profile posts={postsArray} setPosts={setPostArray} /> } />
          <Route exact path="/messages" component={Messages} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
