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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit sint possimus nobis rem deserunt eius quisquam deleniti quaerat! Aliquid provident vel tenetur magnam eum iste consectetur voluptas, repellat ducimus.
      </div>
    </div>

    </>
  )
}
