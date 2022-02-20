import React from 'react';

const Project = ({project}) => {
    return(
        <div className='col-12 col-md-6 col-lg-4 p-3'>
            <div className='card h-100'>
                <img className='project card-img-top' src={project.image} alt="projects"/>
                <div className='card-body text-center'>
                    <h5 className='card-title'><u>{project.title}</u></h5>
                    <p className='card-text'>{project.description}</p>
                </div>
                <a href={project.link} target="_blank" className='btn btn-primary' rel="noreferrer">View Project</a>
                <a href={project.repo} target="_blank" className='btn btn-primary' rel="noreferrer">View Code</a>
            </div>
        </div>
    )
}

export default Project;