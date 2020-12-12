import React, {useState} from 'react'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'
import style from './Posts.module.css'




const Posts = (props) => {
  const [postsArray,setPostArray] = React.useState([{ text: 'Post1', date: '12.12.2020', like: '15' }, { text: 'Post2', date: '11.12.2020', like: '20' }])
  
  function addPost(text) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '.' + dd + '.' + yyyy;
    setPostArray(postsArray.concat([{
      text,
      date: today,
      like: '0'
      }]));
  }
  return <div className='addDiv'>
    My posts
    <NewPost  AddPost={addPost}/>
    { postsArray.map(postArray => {
     return <Post text={postArray} imgProfile={props.Avatar} />
    })}
  </div>
}

export default Posts