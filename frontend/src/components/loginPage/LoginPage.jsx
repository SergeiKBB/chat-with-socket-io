import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import {login} from "../../api";


const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthorizationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

const FormTitle = styled.h3`
  margin-bottom: 15px;
`;

const FormInput = styled.input`
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
  display: block;
  width: 100%;
  padding: .375rem .75rem;
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
    z-index: 2;
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
`;

const Submit = styled.button`
  margin-top: 10px;
  padding: 5px 20px;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;

const LoginPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    const data = { email, password };
    console.log(data);
    const response = await login(data);
    if (response.status === 200) setShouldRedirect(true)
  };
  const handleEmailInput = event => setEmail(event.target.value);
  const handlePasswordInput = event => setPassword(event.target.value);
  return (
    <FormWrapper>
      <AuthorizationForm onSubmit={handleSubmit}>
        <FormTitle>Please, login!</FormTitle>
        <FormInput placeholder="login" onChange={handleEmailInput}/>
        <FormInput placeholder="password" onChange={handlePasswordInput}/>
        <Submit>Submit</Submit>
        {shouldRedirect ? <Redirect to="/" /> : null}
      </AuthorizationForm>
    </FormWrapper>
  );
};

export default LoginPage;
