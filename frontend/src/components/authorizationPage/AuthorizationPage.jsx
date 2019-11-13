import React from 'react';
import styled from 'styled-components';


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
`;

const FormTitle = styled.h3``;

const FormInput = styled.input`

`;

const Submit = styled.button`

`;

const AuthorizationPage = props => (
    <FormWrapper>
      <AuthorizationForm>
        <FormTitle>Please, login!</FormTitle>
        <FormInput value="Login"/>
        <FormInput value="Password"/>
        <Submit>Submit</Submit>
      </AuthorizationForm>
    </FormWrapper>
  );


export default AuthorizationPage;
