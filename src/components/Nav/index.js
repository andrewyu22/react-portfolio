/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';

const Nav = ({currentPage, handlePageChange}) => {


    return (
<header className='sticky-top'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <h1 className="text-light"><a href="index.html">Andrew Yu</a></h1>
        <button className="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id="navbarNav">
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item d-flex flex-column text-center'><a 
                  href="#" 
                  onClick={() => {handlePageChange('About')}} 
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                  <i className="bx bx-user"></i> 
                  <span>About</span>
                </a></li>
            <li className='nav-item d-flex flex-column text-center'><a 
                  href="#" 
                  onClick={() => {handlePageChange('Resume')}} 
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                  <i className="bx bx-file-blank"></i> 
                  <span>Resume</span>
                </a></li>
            <li className='nav-item d-flex flex-column text-center'><a 
                  href="#" 
                  onClick={() => {handlePageChange('Portfolio')}} 
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                  <i className="bx bx-book-content"></i> 
                  <span>Portfolio</span>
                </a></li>
            <li className='nav-item d-flex flex-column text-center'><a 
                  href='#'
                  onClick={() => {handlePageChange('Contact')}} 
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                  <i className="bx bx-envelope"></i> 
                  <span>Contact</span>
                </a></li>
          </ul>
        </div>
      </div>
      </nav>
  </header>
    );
}

export default Nav;

