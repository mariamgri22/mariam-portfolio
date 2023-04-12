// import React from 'react'
// import './style.css'
// import trello from '../../assets/images/trello.png'
// import shop from '../../assets/images/shop.png';
// import ship from '../../assets/images/battleship.png';
// import Project from './Project';

// export default function Projects() {

//   return (
//     <>
//     <p>Please view my works</p>
//     <div className='projects'>
//       <Project
//       image={shop}
//       name="E-commerce"
//       technologies="React,Javascript"
//       view='https://github.com/mariamgri22/e-commerce-react'/>
//   <Project
//   image={trello}
//   name="Trello"
//   technologies="React,Context,Javascript"
//   view='https://github.com/mariamgri22/Task-management-system'/>

// <Project
//  image={ship}
//  name="BattleShip"
//  technologies='React,Context,Javascript'
//  view='https://github.com/mariamgri22/Battleship-multiplayer'
//  />
// </div>
//     </>
//   )
// }

import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import trello from "../../assets/images/trello.png";
import ship from "../../assets/images/battleship.png";
import native1 from "../../assets/images/native1.jpg";
import native2 from "../../assets/images/native2.jpg";
import native3 from "../../assets/images/native3.jpg";
import native4 from "../../assets/images/native4.jpg";
import native5 from "../../assets/images/native5.jpg";
import native6 from "../../assets/images/native6.jpg";
import native7 from "../../assets/images/native7.jpg";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Container id="section3">
      <Heading>My Projects</Heading>
      <Wrapper>
        <Project>
          <Slider {...settings}>
            <Image src={trello} alt="Project 1" />
          </Slider>
          <ProjectTitle>Trello</ProjectTitle>
          <ProjectDescription>
            Technologies stack- React, Context
          </ProjectDescription>
          <ProjectLink href="https://github.com/mariamgri22/Task-management-system">
            View Project
          </ProjectLink>
        </Project>
        <Project>
          <Slider {...settings}>
            <Image src={ship} alt="Project 2" />
          </Slider>
          <ProjectTitle>BattleShip</ProjectTitle>
          <ProjectDescription>
            Technologies stack- React, Context
          </ProjectDescription>
          <ProjectLink href="https://github.com/mariamgri22/Battleship-multiplayer">
            View Project
          </ProjectLink>
        </Project>
        <Project>
          <Slider {...settings1}>
            <Image src={native1} alt="Project 1" />
            <Image src={native2} alt="Project 2" />
            <Image src={native3} alt="Project 2" />
            <Image src={native4} alt="Project 2" />
            <Image src={native5} alt="Project 2" />
            <Image src={native6} alt="Project 2" />
            <Image src={native7} alt="Project 2" />
          </Slider>
          <ProjectTitle>E-commerce</ProjectTitle>
          <ProjectDescription>React-Native, Redux-Toolkit</ProjectDescription>
          <ProjectLink href="https://github.com/mariamgri22/e-commerce-react-native">
            View Project
          </ProjectLink>
        </Project>
        <Project>
          <Slider {...settings}>
            <Image src="" alt="JWt auth" />
          </Slider>
          <ProjectTitle>JWT auth</ProjectTitle>
          <ProjectDescription>
            Technologies stack-React, Zustand, axios,TypeScript <br />
            user authentication, getting access token
          </ProjectDescription>
          <ProjectLink href="https://github.com/mariamgri22/Task-management-system">
            View Project
          </ProjectLink>
        </Project>
      </Wrapper>
    </Container>
  );
};

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Project = styled.div`
  width: calc(33.33% - 1rem);
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ff8b6b;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  display: block;
  color: #333;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #ff6b6b;
  }
`;

export default Projects;
