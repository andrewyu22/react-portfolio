import React from "react";
import Project from "../Project";
const Portfolio = () => {
  const projects = [
    {
      title: "Let`s Eat",
      description:
        "This is an app that returns an instant restaurant suggestion result based on the user’s location, whether by zipcode, neighborhood, or address. Its goal is to streamline the restaurant decision-making process by generating only one restaurant at random.",
      link: "https://a-breezy.github.io/LetsEat/",
      repo: "https://github.com/a-breezy/LetsEat",
      resource: "HTML, Bulma (CSS), Javascript, jQuery",
      image: require("../../assets/img/letsEat.png"),
    },
    {
      title: "Gainz",
      description:
        "A simple daily workout tracker thats logs multiple exercises in a workout on a given day limited by user id. This will allow cosumer to reach their fitness goals quicker when they track their workout progress.",
      link: "https://gainz-workout.herokuapp.com/",
      repo: "https://github.com/andrewyu22/work-out-tracker",
      resource:
        "HTML, CSS, Javascript, Bootstrap, jQuery, Node, Express, MySql, Sequelize, Handlebars",
      image: require("../../assets/img/gym.JPG"),
    },
    {
      title: "Weather Dashboard",
      description: "A Dashboard that shows the whether of the city.",
      link: "https://andrewyu22.github.io/weather-dashboard/",
      repo: "https://github.com/andrewyu22/weather-dashboard",
      resource: "HTML, CSS, Javascript, Bootstrap, jQuery, API",
      image: require("../../assets/img/weather.JPG"),
    },
    {
      title: "Daily Planner",
      description: "Daily Planner to keep track of your own busy schedule!",
      link: "https://andrewyu22.github.io/daily-planner/",
      repo: "https://github.com/andrewyu22/daily-planner",
      resource: "HTML, CSS, Javascript, Bootstrap, jQuery",
      image: require("../../assets/img/planner.JPG"),
    },
    {
      title: "Web Quiz",
      description: "Javascript Quiz!!",
      link: "https://andrewyu22.github.io/web-quiz/",
      repo: "https://github.com/andrewyu22/web-quiz",
      resource: "HTML, CSS, Javascript",
      image: require("../../assets/img/quiz.JPG"),
    },
    {
      title: "Budget Tracker",
      description:
        "An PWA application that allows you to track your budget online and offline! As an users, I want to be able to track my withdrawls and deposits with or without internet connection, so that my account balance is accurate.",
      link: "https://afternoon-beyond-89263.herokuapp.com/",
      repo: "https://github.com/andrewyu22/budget-tracker",
      resource: "HTML, CSS, Javascript, Bootstrap, jQuery",
      image: require("../../assets/img/budget.JPG"),
    },
    {
      title: "GramCam",
      description:
        "Full Stack MERN Application to add an Image Post and comment and like that post.",
      link: "https://gramcam1.herokuapp.com/",
      repo: "https://github.com/andrewyu22/GramCam",
      resource: "HTML, CSS, Javascript, Bootstrap, jQuery",
      image: require("../../assets/img/gramcam.JPG"),
    },
  ];
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h1>Portfolio</h1>
        </div>
        <div className="row d-flex flex-columns justify-content-center">
          {projects.map((project) => (
            <Project project={project} key={project.title}></Project>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
