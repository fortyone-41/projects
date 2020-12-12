import React from 'react'
import Posts from './Posts/Posts'
import style from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div className={style.headerImg}>
        <img src='https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg' width='100%' height='100px' />
      </div>
      <div className={style.descriptionBlock}>
        <div className={style.avatar}>
          <img src='https://www.w3schools.com/howto/img_avatar2.png' height='100px' /> descr
        </div>
      </div>
      <Posts Avatar='https://www.w3schools.com/howto/img_avatar2.png' />
    </div>
  )
}

export default Profile