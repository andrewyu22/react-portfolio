import './App.css';
import React, {useEffect, useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AOS  from 'aos';
import "aos/dist/aos.css";

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    switch(currentPage) {
      case 'About': 
        return <About/>;
      case 'Resume': 
        return <Resume/>;
      case 'Portfolio':
        return <Portfolio/>;
      case 'Contact':
        return <Contact/>;
      default: 
        return <About/>;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  },[]);
  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      <main id="main">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
