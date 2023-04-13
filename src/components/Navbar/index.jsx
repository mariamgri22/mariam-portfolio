import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import song1 from "../../assets/music/audio.mp3";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [currentSong, setCurrentSong] = useState(null);
  const [audio] = useState(new Audio());

  useEffect(() => {
    audio.addEventListener("ended", () => {
      audio.pause();
      setCurrentSong(null);
    });

    return () => {
      audio.removeEventListener("ended", () => {
        audio.pause();
        setCurrentSong(null);
      });
    };
  }, [audio]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setShowMenu(!showMenu);

  const playSong = (song) => {
    if (currentSong === song) {
      audio.pause();
      setCurrentSong(null);
    } else {
      audio.src = song;
      audio.play();
      setCurrentSong(song);
    }
  };

  return (
    <Nav showMenu={showMenu} isScrolled={isScrolled}>
      <Logo
        to="section1"
        isScrolled={isScrolled}
        smooth={true}
        duration={500}
        onClick={() => playSong(song1)}
      >
        My Portfolio
      </Logo>
      <MenuButton isScrolled={isScrolled} onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </MenuButton>
      <MenuLinks showMenu={showMenu}>
        <li>
          <NavLink
            to="section2"
            smooth={true}
            duration={500}
            onClick={() => playSong(song1)}
            isScrolled={isScrolled}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="section3"
            smooth={true}
            duration={500}
            onClick={() => playSong(song1)}
            isScrolled={isScrolled}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="section4"
            smooth={true}
            duration={500}
            onClick={() => playSong(song1)}
            isScrolled={isScrolled}
          >
            Contact
          </NavLink>
        </li>
      </MenuLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  position: fixed;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "#fff" : "transparent"};
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  animation: gradient 15s ease infinite;

  @media screen and (max-width: 768px) {
    background-color: ${({ isScrolled }) =>
      isScrolled ? "#fff" : "rgb(255, 74, 74)"};
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  color: ${({ isScrolled }) => (isScrolled ? "#333" : "#fff")};
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  ${"" /* color: #fff; */}
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    color: ${({ isScrolled }) => (isScrolled ? "#333" : "#fff")};
    ${"" /* color: ${({ showMenu }) => (showMenu ? "#333" : "#fff")}; */}
  }
`;

const MenuLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 4rem 2rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  color: ${({ isScrolled }) => (isScrolled ? "#333" : "#fff")};
  &:hover {
    color: #ff6b6b;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin: 0.5rem 2rem;
    color: ${({ isScrolled }) => (isScrolled ? "#333" : "#333")};
  }
`;

export default Navbar;
