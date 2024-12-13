import { Link, NavLink} from 'react-router-dom'
import React from 'react'
import './style.css'

export const Menu = () => {
  return (
    <nav>
        <li><NavLink  to="/">Home</NavLink></li>
        <li><NavLink to="/sobre">Sobre</NavLink></li>
    </nav>
  )
}
