import React from 'react'
import './style.css'
import trello from '../../assets/images/trello.png'
import shop from '../../assets/images/shop.png';
import ship from '../../assets/images/battleship.png';


export default function Projects() {
 
  return (
    <>
    <p>Please view my works</p>
    <div className='projects'>
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={shop} className='trello' />
      </div>
    <div className="flip-card-back">
    {/* <nav>
      <Link target={"_blank"} to={"https://github.com/mariamgri22/e-commerce-react"}> */}
      <h1>E-commerce</h1> 
      <p>technologies</p> 
      <p>React,Javascript</p>
      <button onClick={()=>{window.open("https://github.com/mariamgri22/e-commerce-react")}}
      >view</button>
      {/* </Link> */}
      {/* </nav> */}
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={trello} className='trello' />
    </div>
    <div className="flip-card-back">
      <h1>Trello</h1> 
      <p>technologies</p> 
      <p>React,Context,Javascript</p>
      <button onClick={()=>{window.open("https://github.com/mariamgri22/Task-management-system")}}
      >view</button>
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={ship} className='trello' />
    </div>
    <div className="flip-card-back">
      <h1>BattleShip</h1> 
      <p>technologies</p> 
      <p>React,Context,Javascript</p>
      <button onClick={()=>{window.open("https://github.com/mariamgri22/Battleship-multiplayer")}}
      >view</button>
    </div>
  </div>
</div>
</div>
    </>
  )
}
