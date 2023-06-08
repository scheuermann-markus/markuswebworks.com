import React from "react";
import "./featuredProjects.css";
import { Link } from "react-router-dom";

const CardData = [
  {
    title: "Notify",
    description:
      "Note keeping application utilizing basic React functionality like useState, props and the spread operator.",
    getImageSrc: () => require("../images/Notify_img.png"),
    viewLink: "notify",
    codeLink: "",
  },
  {
    title: "Game Logic",
    description: "I programmed the Simon Game from scratch to work with logic, arrays, loops, nested functions and more.",
    getImageSrc: () => require("../images/simonGame_img.png"),
    viewLink: "simongame",
    codeLink: "simongame",
  },
  {
    title: "Wordpress",
    description: "Besides React I also work with Wordpress. Feel free to check out two websites I've created.",
    getImageSrc: () => require("../images/wordpress_img.jpg"),
    viewLink: "wordpress",
    codeLink: "wordpress",
  },
];

function Card(props) {
  return (
    <div className="projectCard">
      <img src={props.imageSrc} alt="" />
      <h1>{props.title}</h1>
      <hr />
      <p>{props.description}</p>
      <div className="cardButtons-div">
        <Link to={props.codeLink} as="div" className="cardButton">Code</Link>
        <Link to={props.viewLink} as="div" className="cardButton">View</Link>
      </div>
    </div>
  );
}

function FeaturedProjects() {
  return (
    <div className="FeaturedProjects" id="FeaturedProjects">
      <h2>Projects</h2>
      <div className="project-cards">
        {CardData.map(
          (
            card,
            index //mapping trough CardData
          ) => (
            <Card
              key={index}
              imageSrc={card.getImageSrc()}
              title={card.title}
              description={card.description}
              viewLink={card.viewLink}
              codeLink={card.codeLink}
            />
          )
        )}
      </div>
    </div>
  );
}

export default FeaturedProjects;
