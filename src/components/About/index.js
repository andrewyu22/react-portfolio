import React from 'react';

const About = () => {

    return (
        <section id="about" className="about">
        <div className="container">
  
          <div className="section-title text-center mb-5">
            <h1>About Me</h1>
          </div>
  
          <div className="row align-items-center">
            <div className="col-lg-4" data-aos="fade-up">
              <img src={require('../../assets/img/Andrew.jpg')} className="img-fluid" alt="profile"/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-down">
              <h3>Software Engineer</h3>
              <p className='h4'>
                  Hello, my name is Andrew. I am a Software Engineer located in Brooklyn, New York.
                  My interest in programming started back when I was 14, where I wanted to learn how to create my own website or replicate a private server for games.
                  It wasn't until freshman year of college, where I pique my interest in programming when I took my first class with C++.
              </p>
              <br/>
              <p className='h4'>
                Fast-forward to today, I recently graduated and obtained my Full Stack Web Developer Certificate from Columbia University.
                I have also obtained my Bachelor`s Degree in Computer Science &amp; Mathematics from Hunter College on May 2017.
                Since then I have learned and used C++, C#, and Javascript.
              </p>
              <br/>
              <p className='h4'>
                I'm currently employeed as a Product Manager at a Logistics Company.
                As an eager learner, I`m excited to combine my new technical skills 
                and management experience to continue analyzing project scope to write cleaner code, identifying issues and continue to grow as a team player.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
}

export default About;