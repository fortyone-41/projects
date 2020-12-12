import React, { useState } from 'react'
import style from './NewPost.module.css'



const NewPost = (props) => {
  let newElementText = React.createRef()

  let addPost = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '.' + dd + '.' + yyyy;
    let text = newElementText.current.value
    props.setPost(props.posts.concat([{
      id: props.posts.length + 1,
      text,
      date: today,
      like: '0'
    }]))
  }

  return <div>
    <div>
      <textarea ref={newElementText} />
    </div>
    <button onClick={addPost}>Add Post</button>
  </div>

}

export default NewPost