//links com react router
import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}

      {/*<NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>*/}

<NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/about"
      >
        Sobre
      </NavLink>
    </nav>
  )
}

export default NavBar
