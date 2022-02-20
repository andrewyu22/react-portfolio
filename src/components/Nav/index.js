/* eslint-disable react/style-prop-object */
import React from 'react';

const Nav = ({currentPage, handlePageChange}) => {


    return (

<header id="header">
    <div className="d-flex flex-column align-items-center">

      <div className="profile">
        <img src={require('../../assets/img/Andrew.jpg')} alt="profile" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">Andrew Yu</a></h1>
        <div className="social mt-3 text-center">
          <a href="https://www.instagram.com/andrewyu22" target="_blank" rel="noreferrer"><i className="bx bxl-instagram"></i></a>
          <a href="https://github.com/andrewyu22" target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/andrew-yu-b03181125" target="_blank" rel="noreferrer" ><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
      <hr/>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a 
                href="#about" 
                onClick={() => {handlePageChange('About')}} 
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                <i className="bx bx-user"></i> 
                <span>About</span>
              </a></li>
          <li><a 
                href="#resume" 
                onClick={() => {handlePageChange('Resume')}} 
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                <i className="bx bx-file-blank"></i> 
                <span>Resume</span>
              </a></li>
          <li><a 
                href="#portfolio" 
                onClick={() => {handlePageChange('Portfolio')}} 
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                <i className="bx bx-book-content"></i> 
                <span>Portfolio</span>
              </a></li>
          <li><a 
                href="#contact" 
                onClick={() => {handlePageChange('Contact')}} 
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                <i className="bx bx-envelope"></i> 
                <span>Contact</span>
              </a></li>
        </ul>
      </nav>
    </div>
  </header>
    );
}

export default Nav;

