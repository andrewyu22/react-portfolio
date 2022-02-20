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
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
}
export default Resume;