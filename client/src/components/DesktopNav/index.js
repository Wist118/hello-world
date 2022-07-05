import React from "react";
import { Icon } from '@iconify/react';
import accountIcon from '@iconify/icons-codicon/account';
import homeIcon from '@iconify/icons-iconoir/home';

// NavBar for screens larger than 770
function DesktopNav() {
  return (
    <div id="border">
      <nav id="second-border">
        <div className="max-w-full mx-10 px-10" id="content">
          <div className="flex items-center justify-between h-16">
            <img className="object-scale-down lg:w-1/4 md:w-1/3" src={require('../../assets/logo256.png')} alt="hello world logo"/>
            <div>
              <div className="flex justify-center items-center space-x-4">
                <a
                  href="#"
                  id="nav-hover-home">
                  <Icon icon={homeIcon} height="34" className="mb-1 mr-4"/>
                </a>
                <a
                  href="#"
                  className="px-3" id="nav-hover-user">
                  <Icon icon={accountIcon} height="29" className="mb-1 mr-5"/>
                </a>
                <a
                  href="#"
                  className="text-300 px-3 text-lg" id="nav-hover-about">
                  About
                </a>
                <a
                  href="#"
                  className="text-300 px-3 text-lg" id="nav-hover-help">
                  Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DesktopNav;