import React from 'react'
import style from './History.module.css'

const History = (props) => {
  const mes='Hi, how are you, '+props.name;
  return (
    <div>
      {mes}
    </div>
  )
}

export default History