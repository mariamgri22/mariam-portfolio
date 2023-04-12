

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  font-size: 1rem;

  &::placeholder {
    color: #ccc;
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;

  &::placeholder {
    color: #ccc;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export default Contact;
