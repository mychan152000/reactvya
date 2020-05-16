import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {RedditPosts} from "./components/reddit";
function App() {
  const [reddit,things]= React.useState([]);
  useEffect(() =>{
    fetch('/reddit').then(response => response.json().then(data=>{
      things(data.reddits);
    })
    );
  },[])
  console.log(reddits);
  return (
    <div class="App">
        <RedditPosts posts = {reddits}/>

    </div>

  );
}

export default App;
