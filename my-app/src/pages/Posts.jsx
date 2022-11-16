import React, {useEffect, useRef, useState} from 'react';
import '../App.css';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import { usePosts } from '../hooks/usePosts';
import MyButton from '../UI/button/MyButton';
import MyModal from '../UI/MyModal/MyModal';

import Loader from "../UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../UI/utils/pages";
import Pagination from "../UI/Pagination/Pagination";
import PostService from "../API/PostService.jsx";
import {useOserver} from "../hooks/useOserver";
import MySelect from "../UI/MySelect/MySelect";



function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort:'', query:''});
    const [modal, setModal] = useState(true);
    const sortedAndSorchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const lastElements = useRef();

    const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

useOserver(lastElements, 0, page<totalPages, isPostsLoading, () => {setPage(page+1)});


    useEffect(() => {
        fetchPosts();

    }, [page, limit])

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

            <MySelect
                value={limit}
                defaultValue={"number of posts"}
                onChange={(value) => setLimit(value)}
                option={[
                    {value: 5,    name: 5},
                    {value: 10,    name: 10},
                    {value: 25,    name: 25},
                    {value: 50,    name: 50},
                    {value: -1,    name: "oll"},
                ]}
            />

            {isPostsLoading &&

                     <div style={{display:'flex', justifyContent:'center', marginTop:50}}> <Loader/> </div>
            }
                <PostList remove={removePost} posts={sortedAndSorchedPosts} title="postu pro js"/>
                <div ref={lastElements} style={{height: 15, background: "grey"}}/>

                <Pagination totalPages={totalPages} page={page} setPage={setPage}/>

        </div>
    );
}

export default Posts;