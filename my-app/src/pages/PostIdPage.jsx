import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../UI/Loader/Loader";
import Comments from "./Comments";
import MyButton from "../UI/button/MyButton";



const PostIdPage = () => {

   const params = useParams()
   const id = params.id;

   const [post, setPost] = useState({});
   const [fetchPostById, isLoading, error] = useFetching(async () => {
       const response = await PostService.getById(id);
       setPost(response.data);
   })


    const [visible, setVisible]= useState(false);
    const OpenComments = () =>{
        if(!visible){
            setVisible(true);
        } else setVisible(false);
        return setVisible;
    }

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

return (
        <div>
            <div>
                <h1>Post {params.id}</h1>
                {isLoading
                    ? <Loader/>
                    : <div>{post.id}. {post.title}</div>
                }
            </div>
            <div>
                <h2>Comments</h2>

                {visible
                    ? <div>
                        <MyButton onClick={OpenComments}>Close comments</MyButton>
                        <Comments/>
                        <MyButton onClick={OpenComments}>Close comments</MyButton>
                    </div>

                    : <div>
                        <MyButton onClick={OpenComments}>Open comments</MyButton>
                    </div>
                }
            </div>

        </div>
    );
};

export default PostIdPage;