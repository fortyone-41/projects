import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'



const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink activeClassName={style.active} to='/profile'>Profile</NavLink>
      </div>
      <div className={style.item}>
      <NavLink activeClassName={style.active} to='/messages'>Messages</NavLink>
      </div>
      <div className={style.item}>
        <a>News</a>
      </div>
      <div className={style.item}>
        <a>Music</a>
      </div>
      <div className={style.item}>
        <a>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar