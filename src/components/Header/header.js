import React from 'react'
import '../Header/Header.css'
import {Routes, Route, Link } from 'react-router-dom';
export default function header() {
  return (
    <div>
      <header>
        <div className='header_logo'>
            Freelancer <span className='logo_title'>portfolio</span>
        </div>
        <nav>
            <ul>
            <li><Link to='/'>Home</Link></li>
              <li><Link to='/project'>Project</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/skill'>Skill</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
