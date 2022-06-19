import React from 'react'

export default function Project({image,name,technologies,view}) {
  return (
    <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={image} className='trello' alt='img' />
    </div>
    <div className="flip-card-back">
      <h1>{name}</h1> 
      <p>technologies</p> 
      <p>{technologies}</p>
      <button onClick={()=>{window.open(`${view}`)}}
      >view</button>
    </div>
  </div>
</div>
  )
}
