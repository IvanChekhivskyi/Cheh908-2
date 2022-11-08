import React, { useEffect, useState } from 'react';
import './App.css';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import { usePosts } from './hooks/usePosts';
import MyButton from './UI/button/MyButton';
import MyModal from './UI/MyModal/MyModal';
import PostService from "./API/PostService";
import Loader from "./UI/Loader/Loader";
import {useFatching} from "./hooks/useFatching";


function App() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(true);
  const sortedAndSorchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFatching( async () => {
      const posts = await PostService.getAll();
      setPosts(posts)
  })

    useEffect(() => {
    fetchPosts()
  }, [])

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(true);
  }

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

 return(
    <div className="App">
      
      

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

      {postError &&
          <h1>Error 404</h1>
      }

      {isPostsLoading
          ? <div style={{display:'flex', justifyContent:'center', marginTop:50}}> <Loader/> </div>
          : <PostList remove={removePost} posts={sortedAndSorchedPosts} title="postu pro js"/>
      }

      </div>
  );
}

export default App;
