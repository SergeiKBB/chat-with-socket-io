import React from 'react';
import Menu from '../menu/MenuComponent';


const Header = props => {
  return (
      <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <Menu />
        <a class="btn btn-outline-primary" href="#">Sign up</a>
      </header>
  )
};


export default Header;



