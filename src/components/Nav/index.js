/* eslint-disable react/style-prop-object */
import React from 'react';

const Nav = () => {


    return (

<header id="header">
    <div class="d-flex flex-column align-items-center">

      <div class="profile">
        <img src={require('../../assets/img/Andrew.jpg')} alt="profile" class="img-fluid rounded-circle"/>
        <h1 class="text-light"><a href="index.html">Andrew Yu</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="https://www.instagram.com/andrewyu22" target="_blank" rel="noreferrer"><i class="bx bxl-instagram"></i></a>
          <a href="https://github.com/andrewyu22" target="_blank" rel="noreferrer"><i class="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/andrew-yu-b03181125" target="_blank" rel="noreferrer" ><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
      <hr/>
      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
    );
}

export default Nav;

