import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/HeaderComponent';
import Main from './components/main/MainComponent';
import MessageHistory from './components/messageHistory/MessageHistory';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <MessageHistory />
      </Main>
    </div>
  );
}

export default App;
