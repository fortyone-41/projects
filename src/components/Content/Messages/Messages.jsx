import React from 'react'
import {Route, BrowserRouter } from 'react-router-dom'
import Dialogs from './Dialogs/Dialogs'
import style from './Messages.module.css'
import History from './History/History'

const Messages = () => {
  const arr='Ivan';
  return (
    <div className={style.dialogs}>
      <BrowserRouter>
      <div className={style.dialogsItems}>
        <ul>
          <Dialogs name='Ivan' />
          <Dialogs name='Viktor' />
          <Dialogs name='Valera' />
        </ul>
      </div>
      <div className={style.messages}>
      
        <Route path={"/messages/" + arr} 
        render={ (props) => <History {...props} name={'Ivan'}  /> } />
        <Route path="/messages/Viktor" 
        render={ (props) => <History {...props} name={'Viktor'}  /> } />
        <Route path="/messages/Valera" 
        render={ (props) => <History {...props} name={'Valera'}  /> } />
        
      </div>
      </BrowserRouter>
    </div>
  )
}

export default Messages