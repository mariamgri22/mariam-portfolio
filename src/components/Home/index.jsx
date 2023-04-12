import React, { useState } from "react";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import myResume from '../../assets/pdf/MariamGrigoryan.pdf'
import { saveAs } from 'file-saver';

const Home = () => {
  const [textColor, setTextColor] = useState("white");
  const handleDownload = () => {

    const fileURL = myResume;
    saveAs(fileURL, 'MyCV.pdf');
 }
 
  return (
    <Gradient id="section1">
      <Container>
        <Hero>
          <TypeAnimation
            style={{
              whiteSpace: "pre-line",
              fontSize: "4em",
              display: "block",
              color: textColor,
            }}
            sequence={[
              `Hi, I'm Mariam\nI'm a front-end developer`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
              1000,
              "",
            ]}
            repeat={Infinity}
            wrapper="span"
          />
          <Button onClick={handleDownload}>
          Download my CV
          </Button>
        </Hero>
      </Container>
    </Gradient>
  );
};

const Gradient = styled.div`
  background: linear-gradient(
    to right,
    #f9d5e5,
    #ffd7ba,
    #ffaaa5,
    #ff8b6b,
    #ff6b6b,
    #ff5e5e,
    #ff4a4a,
    #ff4136,
    #e60000
  );
  background-size: 1800% 100%;
  animation: gradient 20s ease infinite;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  ${"" /* background-color: #f2f2f2; */}
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    height: 50vh;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #fff;
  border-color: #fff;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgb(217 0 24 / 79%);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
`;

const About = styled.section`
  margin-bottom: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
`;

export default Home;
