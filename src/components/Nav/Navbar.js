import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
              <Link to="/"> 
               <p>Navbar</p>
              </Link>
            </div>
        </nav>
    )
}
