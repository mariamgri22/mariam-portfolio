import React from 'react'
 import './style.css'
 import myResume from '../../assets/pdf/MariamGrigoryan.pdf'

export default function About() {
  return (
   <>
     <div className='home'>
      <div className="context">
        <h1>Hi,I'm Mariam, junior frontend developer</h1>
        <div className="button">
          <button className='btn'>
          <a className="button" href={myResume} download = "MariamGrigoryanResume.pdf">
          <i class="fa fa-download"></i> Download Resume
      </a>
     </button>
       
</div>
    </div>
<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>
   </>
  )
}
