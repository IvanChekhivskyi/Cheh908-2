import React, { useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';



function App() {

  const [posts, setPosts] = useState([
    {id:0, title:'df', body:'gg'},
    {id:1, title:'gfg', body:'ee'},
    {id:2, title:'rr', body:'ee'},
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }

    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return(
    <div className="App">
     <form>
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder="title"
        />

        <MyInput 
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text" 
          placeholder="body"
        />

        <MyButton onClick={addNewPost}>add</MyButton>
      </form>  
          
      <PostList posts={posts} title="postu pro js"/>
      
  </div>
  );
}

export default App;
