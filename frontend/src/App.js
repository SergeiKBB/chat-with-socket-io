import React from 'react';
import styled from 'styled-components';
import Logo from './companionImg.png';

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

const Main = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.h1`  
  padding: 50px 0;
  text-align: center;
`;

const ChatWrapper = styled.div`
  display: flex;
  background-color: rgba(255,255,255,0.81);
`;

const Dialogs = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  padding: 10px 5px;
`;

const HistoryWrapper = styled.div`
  
`;

const History = styled.div``;

const MessageItem = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const CompanionName = styled.span`
  font-weight: bold;
`;

const Message = styled.p``;

const MessageTime = styled.span`
  align-self: flex-start;
`;

const MessageForm = styled.form``;

const IconWrapper = styled.div`
  width: 75px;
  height: 75px;
  overflow: hidden;
  border-radius: 50%;
`;

const Icon = styled.img`
  width: auto;
  height: 100%;
  margin: 0 auto;
`;

const links = ['Features','Enterprise','Support','Pricing','Sign up'];

function App() {
  return (
    <AppWrapper>
      <Header>
        <Nav>
          {links.map(item => <NavItem><NavLink href="https://google.com">{item}</NavLink></NavItem>)}
        </Nav>
      </Header>
      <Main>
        <ChatWrapper>
          <Dialogs>
            <MessageItem>
              <IconWrapper>
                <Icon src={Logo}/>
              </IconWrapper>
              <Content>
                <CompanionName>Peter</CompanionName>
                <Message>Hello my dear friend. I called you 2 hours ago.</Message>
              </Content>
              <MessageTime>16:00</MessageTime>
            </MessageItem>
          </Dialogs>
          <HistoryWrapper>
            <History>
              <MessageItem />
            </History>
            <MessageForm>

            </MessageForm>
          </HistoryWrapper>
        </ChatWrapper>
      </Main>
    </AppWrapper>
  );
}

export default App;
