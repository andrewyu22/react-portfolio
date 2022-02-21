import React from 'react';
import resume from '../../assets/docs/Resume.pdf';

const Resume = () => {
    return (
        <section id="resume" className="resume">
      <div className="container">

        <div className="section-title mb-3 text-center">
          <h2>Resume</h2>
          <a href={resume} target="_blank" rel="noreferrer" className="btn btn-primary align-items-center" download><i className='bx bx-download'></i> Resume</a>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Andrew Yu</h4>
              <p>
                  <em>
                    Full Stack Developer with a background in Product Manager for Logistics. <br/>
                    Recognized as resourceful, problem-solver, and team-player. <br/>
                    Graduate of Full Stack Web Development through Columbia University.
                  </em>
              </p>
              <ul>
                <li>Brooklyn, New York</li>
                <li>(718) 208-0949</li>
                <li>andrewyu2654@gmail.com</li>
              </ul>
            </div>
            <hr/>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Certificate in Full Stack Web Development</h4>
              <h5>Sept. 2021 - Mar. 2022</h5>
              <p><em>Columbia University, New York, NY</em></p>
              <p>Grade: A+</p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Computer Science &amp; Mathematics</h4>
              <h5> Aug. 2013 - May 2017</h5>
              <p><em>CUNY - Hunter College, New York, NY</em></p>
              <p>Grade: 3.4 GPA</p>
            </div>
            <hr/>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Engineer</h4>
              <h5>Sept. 2021 - Present</h5>
              <p><em>Springfields Garden, Queens, NY</em></p>
              <ul>
                <li>Designing a Report Function for Management using C# and SQL/MySQL Scripts</li>
                <li>Structuring and Maintaining the MySQL/SQL Database and running queries</li>
                <li>Contributed in Designing an EDI Services Solution which save an average of 1 week worth of development time</li>
                <li>Pulling data and converting them in ANSI X12 format using the BizTalk Server to Validate &amp; Generate EDI</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Product Manager</h4>
              <h5>Feb. 2017 - Sept. 2021</h5>
              <p><em>Springfields Garden, Queens, NY</em></p>
              <ul>
                <li>Responsible for gathering &amp; Analyzing Customers’ requirements or Proposal a solution to support and meet our Customers` Expectation</li>
                <li>Continued Planning on Enhancement of our Products to guarantee a User-Friendly System</li>
                <li>Plan &amp; Design a well-organized flow and Generate a Product Requirement Document (PRD)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
}
export default Resume;