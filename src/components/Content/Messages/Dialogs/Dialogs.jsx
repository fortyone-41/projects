import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <li className={style.dialog + ' ' + style.active}>
      <NavLink to={'/messages/' +props.name} activeClassName={style.active}>{props.name}</NavLink>
    </li>
  )
}

export default Dialogs