import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text>© 2023 Mariam. All Rights Reserved.</Text>
    </Container>
  );
};

const Container = styled.footer`
  background: linear-gradient(
    to right,
    #ff8b6b,
    #ff6b6b,
    #ff5e5e,
    #ff4a4a,
    #ff4136,
    #e60000
  );
  background-size: 1800% 100%;
  animation: gradient 20s ease infinite;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const Text = styled.p`
  font-size: 0.8rem;
`;

export default Footer;
