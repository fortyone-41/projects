import React from 'react'
import style from './Post.module.css'



const Post = (props) => {
  return (   
    <div className={style.item}>
      <img src={props.imgProfile} />
      {props.text.text} 
      <div>
      {props.text.date} <span>like: {props.text.like}</span>
      </div>
    </div>
  )
}

export default Post