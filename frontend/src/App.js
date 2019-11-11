import React, { useState, useEffect } from 'react';
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
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  height: ${props => props.mainHeight}px;
  margin: 0 auto;
`;

const Title = styled.h1`  
  padding: 50px 0;
  text-align: center;
`;

const ChatWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: rgba(255,255,255,0.81);
`;

const Dialogs = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  border-right: 1px solid #bfbfbf;
`;

const HistoryWrapper = styled.div`
  width: 65%;
  padding: 0 75px;
  background-color: #fff;
`;

const History = styled.div``;

const MessageItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0px 10px 15px;

  &:first-child {
    padding-top: 10px;
  }

  &:hover {
    background: #bfbfbf;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrappper = styled.div`
  display: flex;
  width: calc(100% - 50px);
  padding: 0 10px;
`;

const CompanionName = styled.span`
  font-weight: bold;
`;

const Message = styled.p`
  margin: 0 10px 0 0;
  // white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
`;

const MessageTime = styled.span`
  align-self: flex-start;
`;

const MessageForm = styled.form``;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
`;

const Icon = styled.img`
  width: auto;
  height: 100%;
  margin: 0 auto;
`;

const links = ['Features', 'Enterprise', 'Support', 'Pricing', 'Sign up'];


function App() {
  const [mainHeight, setMainHeight] = useState(0); 

  useEffect(() => {
    const bodyHeight = document.body.clientHeight;
    const headerHeight = document.getElementById('header').clientHeight;
    console.log(bodyHeight);
    setMainHeight(bodyHeight - headerHeight - 20);
  })
  return (
    <AppWrapper>
      <Header id="header">
        <Nav>
          {links.map(item => <NavItem><NavLink href="https://google.com">{item}</NavLink></NavItem>)}
        </Nav>
      </Header>
      <Main mainHeight={mainHeight}>
        <ChatWrapper>
          <Dialogs>
            <MessageItem>
              <IconWrapper>
                <Icon src={Logo} />
              </IconWrapper>
              <ContentWrappper>
                <Content>
                  <CompanionName>Peter</CompanionName>
                  <Message>Hello my dear friend. I called you 2 hours ago.</Message>
                </Content>
                <MessageTime>16:00</MessageTime>
              </ContentWrappper>
            </MessageItem>
            <MessageItem>
              <IconWrapper>
                <Icon src={Logo} />
              </IconWrapper>
              <ContentWrappper>
                <Content>
                  <CompanionName>Peter</CompanionName>
                  <Message>Hello my dear friend. I called you 2 hours ago.</Message>
                </Content>
                <MessageTime>16:00</MessageTime>
              </ContentWrappper>
            </MessageItem>
            <MessageItem>
              <IconWrapper>
                <Icon src={Logo} />
              </IconWrapper>
              <ContentWrappper>
                <Content>
                  <CompanionName>Peter</CompanionName>
                  <Message>Hello my dear friend. I called you 2 hours ago.</Message>
                </Content>
                <MessageTime>16:00</MessageTime>
              </ContentWrappper>
            </MessageItem>
          </Dialogs>
          <HistoryWrapper>
            <History>
            <MessageItem>
              <IconWrapper>
                <Icon src={Logo} />
              </IconWrapper>
              <ContentWrappper>
                <Content>
                  <CompanionName>Peter</CompanionName>
                  <Message>Hello my dear friend. I called you 2 hours ago.</Message>
                </Content>
                <MessageTime>16:00</MessageTime>
              </ContentWrappper>
            </MessageItem>
            <MessageItem>
              <IconWrapper>
                <Icon src={Logo} />
              </IconWrapper>
              <ContentWrappper>
                <Content>
                  <CompanionName>Peter</CompanionName>
                  <Message>Hello my dear friend. I called you 2 hours ago.</Message>
                </Content>
                <MessageTime>16:00</MessageTime>
              </ContentWrappper>
            </MessageItem>
            <MessageItem>
              <IconWrapper>
                <Icon src={Logo} />
              </IconWrapper>
              <ContentWrappper>
                <Content>
                  <CompanionName>Peter</CompanionName>
                  <Message>Hello my dear friend. I called you 2 hours ago.</Message>
                </Content>
                <MessageTime>16:00</MessageTime>
              </ContentWrappper>
            </MessageItem>
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
