import React from 'react';
import Project  from '../Project';
const Portfolio = () => {
    const projects = [
    {
        title: 'Let`s Eat',
        description: "This is an app that returns an instant restaurant suggestion result based on the user’s location, whether by zipcode, neighborhood, or address. Its goal is to streamline the restaurant decision-making process by generating only one restaurant at random.",
        link: 'https://a-breezy.github.io/LetsEat/',
        repo: 'https://github.com/a-breezy/LetsEat',
        resource: 'HTML, Bulma (CSS), Javascript, jQuery',
        image: require('../../assets/img/letsEat.png')
    },
    {
        title: 'Gainz',
        description: "A simple daily workout tracker thats logs multiple exercises in a workout on a given day limited by user id. This will allow cosumer to reach their fitness goals quicker when they track their workout progress.",
        link: 'https://gainz-workout.herokuapp.com/',
        repo: 'https://github.com/andrewyu22/work-out-tracker',
        resource: 'HTML, CSS, Javascript, Bootstrap, jQuery, Node, Express, MySql, Sequelize, Handlebars',
        image: (require('../../assets/img/gym.JPG'))
    },
    {
        title: 'Gainz1',
        description: "A simple daily workout tracker thats logs multiple exercises in a workout on a given day limited by user id. This will allow cosumer to reach their fitness goals quicker when they track their workout progress.",
        link: 'https://gainz-workout.herokuapp.com/',
        repo: 'https://github.com/andrewyu22/work-out-tracker',
        resource: 'HTML, CSS, Javascript, Bootstrap, jQuery, Node, Express, MySql, Sequelize, Handlebars',
        image: (require('../../assets/img/gym.JPG'))
    },
    {
        title: 'Gainz2',
        description: "A simple daily workout tracker thats logs multiple exercises in a workout on a given day limited by user id. This will allow cosumer to reach their fitness goals quicker when they track their workout progress.",
        link: 'https://gainz-workout.herokuapp.com/',
        repo: 'https://github.com/andrewyu22/work-out-tracker',
        resource: 'HTML, CSS, Javascript, Bootstrap, jQuery, Node, Express, MySql, Sequelize, Handlebars',
        image: (require('../../assets/img/gym.JPG'))
    }
    ]
    return (
        <section id="portfolio">
            <div className='container'>
                <div className="section-title text-center mb-5">
                    <h1>Portfolio</h1>
                </div>
                <div className='row d-flex flex-columns justify-content-center'>
                    {projects.map((project) => (            
                    <Project project={project} key={project.title}></Project>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;