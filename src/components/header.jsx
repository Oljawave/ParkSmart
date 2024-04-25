import logo from './components_img/logo.png';
import React from 'react';
import './components_css/header.css'

function Header() {
    return (
        <header class="header">
        <div class="header-content">
            <div class="logo">
                <a href="index.html">
                    <img class="logo__img" src={logo} alt="" width="160" height="25" />
                </a>
            </div>

            <nav class="nav">
                <ul class="nav-list">
                    <li class="nav-link"><a href="#main">Main</a></li>
                    <li class="nav-link"><a href="#process">Search</a></li>
                    <li class="nav-link"><a href="#process">Favourites</a></li>
                    <li class="nav-link"><a href="#process">Support</a></li>

                    <a href="signup.html"><button type="button" class="btn btn-register">Profile</button></a>
                </ul>
            </nav>
        </div>
    </header>
    );
  }
  
  export default Header;
  