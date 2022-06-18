import React from 'react'
import ButtonMailto from '../ButtonMailito'
import './style.css'

export default function Contact() {
  return (
    <div className='contact'>
     <ButtonMailto label="Write me an E-Mail" mailto="mailto:mariamgrigoryan99@gmail.com" />
     <p> Or you can call</p>
     <p>+374-94771999</p>
    </div>
  )
}
