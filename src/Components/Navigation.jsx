import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css';

const Navigation = () => {
  return (
    <>
     <nav className='sticky-nav'>
        <ul>
            
            <li>
                <Link to="/upload">Convert to pdf</Link>
            </li>
            <li>
                <Link to="/convert">Convert to Word</Link>
            </li>
        </ul>
        </nav> 
    </>
  )
}

export default Navigation
