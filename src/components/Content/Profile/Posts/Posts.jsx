import React, { useState } from 'react'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'
import style from './Posts.module.css'




const Posts = (props) => {
 
  return (
    <div className={style.addDiv}>
      <h3>My posts</h3>
      <NewPost posts={props.posts} setPost={props.setPost}/>
      { props.posts.map((postArray) => {
        return <Post text={postArray} key={postArray.id} imgProfile={props.Avatar} />
      })}
    </div>
  )
}

export default Posts