import React from "react";
import styled from "styled-components";
import girl from "../../assets/images/girl.png";

const About = () => {
  return (
    <Container id="section2">
      <Heading>About Me</Heading>
      <Wrapper>
        <Image src={girl} alt="Profile Picture" />
        <Paragraph>
           Hi there! I'm Mariam, a front-end
          developer with 3 months of internship experience. I'm passionate about
          creating responsive and engaging web applications using the latest
          technologies. I'm a team player and always eager to learn and
          collaborate. Thanks for checking out my portfolio! Thank you for
          taking the time to visit my portfolio. If you are interested in
          learning more about my work, please don't hesitate to get in touch. I
          look forward to connecting with you soon!
        </Paragraph>
      </Wrapper>
      <Skills>
        <Heading>Skills</Heading>
        <SkillList>
          <SkillItem>HTML</SkillItem>
          <SkillItem>CSS</SkillItem>
          <SkillItem>JavaScript</SkillItem>
          <SkillItem>React</SkillItem>
          <SkillItem>React Native</SkillItem>
          <SkillItem>Redux</SkillItem>
          <SkillItem>Redux-Toolkit</SkillItem>
          <SkillItem>Zustand</SkillItem>
          <SkillItem>Sass</SkillItem>
          <SkillItem>Styled-Components</SkillItem>
        </SkillList>
      </Skills>
    </Container>
  );
};

const Container = styled.div`
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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  margin-left: 2rem;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    margin: 0;
    text-align: center;
  }
`;

const Skills = styled.section`
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const SkillList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-gap: 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: 1020px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
`;

const SkillItem = styled.li`
  border: 5px solid #ff8b6b;
  background-color: #ff5e5e;
  animation: animateSkillItem 2s ease-in-out infinite;
  font-size: 3rem;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: linear-gradient(
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
  text-shadow: 0 0 10px #ff8b6b, 0 0 20px #ff8b6b, 0 0 30px #ff8b6b;
  &:hover {
    transform: rotate(360deg) scale(1.5);
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default About;
