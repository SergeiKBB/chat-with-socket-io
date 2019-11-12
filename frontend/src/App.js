import React, {useState, useEffect} from 'react';
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
  padding: 0;
  background-color: #fff;
`;

const History = styled.div`
  padding: 0 75px;
`;

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
  justify-content: space-between;
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

const MessageFormWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 75px;
  border-top: 1px solid #bfbfbf;
`;

const MessageForm = styled.form`
  display: flex;
  flex-grow: 1;
  padding: 0 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  display: block;
  padding: .375rem .75rem;
  margin-right: 5px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  
  &:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
`;

const Submit = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #007bff;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  background-color: #007bff;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

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
  }, []);

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
                <Icon src={Logo}/>
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
                <Icon src={Logo}/>
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
                <Icon src={Logo}/>
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
                  <Icon src={Logo}/>
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
                  <Icon src={Logo}/>
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
                  <Icon src={Logo}/>
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
            <MessageFormWrapper>
              <IconWrapper>
                <Icon src={Logo}/>
              </IconWrapper>
              <MessageForm>
                <Textarea />
                <Submit>Send</Submit>
              </MessageForm>
              <IconWrapper>
                <Icon src={Logo}/>
              </IconWrapper>
            </MessageFormWrapper>
          </HistoryWrapper>
        </ChatWrapper>
      </Main>
    </AppWrapper>
  );
}

export default App;
