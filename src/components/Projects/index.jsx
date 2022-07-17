import React from 'react'
import './style.css'
import trello from '../../assets/images/trello.png'
import shop from '../../assets/images/shop.png';
import ship from '../../assets/images/battleship.png';
import Project from './Project';


export default function Projects() {
 
  return (
    <>
    <p>Please view my works</p>
    <div className='projects'>
      <Project 
      image={shop}
      name="E-commerce" 
      technologies="React,Javascript"
      view='https://github.com/mariamgri22/e-commerce-react'/>
  <Project 
  image={trello}
  name="Trello"
  technologies="React,Context,Javascript"
  view='https://github.com/mariamgri22/Task-management-system'/>

<Project
 image={ship}
 name="BattleShip"
 technologies='React,Context,Javascript'
 view='https://github.com/mariamgri22/Battleship-multiplayer'
 />
</div>
    </>
  )
}
