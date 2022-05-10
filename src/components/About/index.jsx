import React from 'react'
import './style.css'
import imageMar from '../../assets/images/imageMar.jpg'

export default function About() {
  return (
    <>
    <div className='about'>
      <img className='image' src={imageMar}/>
      <div>
        <p>My Info</p>
        My first laptop was made of a box of candies, the keyboard և screen of which was painted with markers, and the screen images changed very often, making my laptop look like a big, huge box.
      </div>
    </div>

    </>
  )
}
