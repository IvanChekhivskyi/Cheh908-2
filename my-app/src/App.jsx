import React, { useEffect, useState } from 'react';
import './App.css';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { usePosts } from './hooks/usePosts';
import MyButton from './UI/button/MyButton';
import MyModal from './UI/MyModal/MyModal';
import axios from 'axios';




function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal] = useState(true)
  const sortedAndSorchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, [])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setModal(true)
}
//------дістаю масив даних по посиланню і записую за допомогою функції setPost 
//      у масив даних для подальшої обробки


async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data)
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}


  return(
    <div className="App">
      
      <button onClick={fetchPosts}>GetPost</button>

      <MyButton style={{marginTop: 30}} onClick={() => setModal(false)}>
        Create post
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
     
        

      <hr style={{margin: '15px 0'}}/>
      
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />

      <PostList remove={removePost} posts={sortedAndSorchedPosts} title="postu pro js"/>     
      
      
    </div>
  );
}

export default App;
