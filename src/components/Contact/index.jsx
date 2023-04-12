

import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <Container id="section4">
      <Heading>Contact Me</Heading>
      <SocialIcons>
        <IconLink
          href="mailto:mariamgrigoryan99@gmail.com"
          target="_blank"
          aria-label="Email Me"
        >
          <FaEnvelope />
        </IconLink>
        <IconLink href="tel:+37494771999" target="_blank" aria-label="Call Me">
          <FaPhone />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/mariam-grigoryan-b76245231/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </IconLink>
        <IconLink
          href="https://github.com/"
          target="_blank"
          aria-label="Github"
        >
          <FaGithub />
        </IconLink>
      </SocialIcons>
    
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
  text-align:center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const IconLink = styled.a`
  font-size: 2rem;
  margin-right: 1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;








export default Contact;
