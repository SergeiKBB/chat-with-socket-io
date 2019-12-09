import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
import io from 'socket.io-client';
import LoginPage from "./components/loginPage/LoginPage";
import SignUpPage from "./components/signUpPage/SignUpPage";
import MainPage from "./components/mainPage/MainPage";

const socket = io('http://localhost:8000');

const AppWrapper = styled.div`
  height: 100vh;
  background: rgba(187,187,187,0.56);
  color: black;
`;

const Header = styled.div`
  width: 100%;
  box-shadow: 0px 1px 7px 0px rgba(0,0,0,0.25);
  background: rgba(26,68,149,0.67);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
`;

const NavItem = styled.li`
  padding: 15px 15px;
  list-style-type: none;
`;

const NavLink = styled.a`
  color: white;
  
  &:hover {
    color: rgba(0,0,0,0.69);
  }
`;

const links = ['Features', 'Enterprise', 'Support', 'Pricing', 'SignUp', 'Login'];


function App() {
  return (
    <AppWrapper>
      <Router>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signUp">
          <SignUpPage/>
        </Route>
        <Route path="/" exact>
          <Header id="header">
            <Nav>
              {links.map(item => <NavItem><NavLink href={item}>{item}</NavLink></NavItem>)}
            </Nav>
          </Header>
          <MainPage />
        </Route>
      </Router>
     </AppWrapper>
  );
}

export default App;
