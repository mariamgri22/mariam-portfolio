import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
  return (
    <>
    <div className='navbar'>
    <nav className='container'>
    <Link  to='/' className='link'>Home</Link>
    <Link  to='/projects' className='link'>Projects</Link>
    <Link  to='/about' className='link'>About</Link>
    <Link  to='/contact' className='link'>Contact</Link>
    </nav>
    </div>
    </>
  )
}
