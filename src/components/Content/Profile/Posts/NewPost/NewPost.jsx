import React, {useState} from 'react'
import style from './NewPost.module.css'

function returnPost(text) {
  const objectPost=text;
  return objectPost;
}

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
      bind: {
          value,
          onChange: event => setValue(event.target.value)
      },
      clear: () => setValue(''),
      value: () => value
  }
}

const NewPost = (props) => {

  const textarea = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if (textarea.value().trim()) {
            props.AddPost(textarea.value())
            textarea.clear()
        }
    }
  return <div>
    <form onSubmit={submitHandler}>
      <textarea {...textarea.bind}></textarea>
      <button type='submit'>Add Post</button>
    </form>
  </div>

}

export default NewPost