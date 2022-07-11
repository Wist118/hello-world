import React from "react";
import { Icon } from '@iconify/react';
import accountIcon from '@iconify/icons-codicon/account';
import homeIcon from '@iconify/icons-iconoir/home';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

// NavBar for screens 768 and larger
function NavLg() {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="hidden md:contents">
      <div id="border">
        <nav id="second-border">
          <div className="max-w-full mx-10 px-10" id="content">
            <div className="flex items-center justify-between h-16">
              <img className="object-scale-down lg:w-1/4 md:w-1/3" src={require('../../assets/logo256.png')} alt="hello world logo"/>
              <div>
                <div className="flex justify-center items-center space-x-4">
                  <a
                    href="/"
                    id="nav-home">
                    <Icon icon={homeIcon} height="34" className="mb-1 mr-4"/>
                  </a>
                  <a
                    href="/account"
                    className="px-3" 
                    id="nav-user">
                    <Icon icon={accountIcon} height="29" className="mb-1 mr-5"/>
                  </a>
                  {Auth.loggedIn() ? (
                    <>
                      <Link to='/login' onClick={logout}>Logout</Link>
                    </>
                  ) : (
                    <>
                      {/* <Link to="/login">Login</Link> */}
                    </>
                  )}
                  <a
                    href="/help"
                    className="font-light px-3 text-lg" 
                    id="nav-help">
                    Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavLg;