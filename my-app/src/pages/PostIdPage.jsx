import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../UI/Loader/Loader";



const PostIdPage = () => {
   const params = useParams()
   const id = params.id;

   const [post, setPost] = useState({});
   const [fetchPostById, isLoading, error] = useFetching(async () => {
       const response = await PostService.getById(id);
       setPost(response.data);
   })

   const [comments, setComments] = useState({});
   const [fetchCommentsById, isLoadingComments, errorComments] = useFetching(async () => {
       const response = await PostService.getCommentsById(id);
       setComments(response.data);
   })

     useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsById(params.id)
    }, [])

    return (
        <div>
            <h1>Post {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }

            {isLoadingComments
                ? <Loader/>
                :   <div>
                    {comments.map(comm =>
                        <div style={{marginTop: 15}}>
                            1<h3>{comm.email}</h3>
                            <div>{comm.body}</div>
                        </div>
                    )}

                </div>
            }
        </div>
    );
};

export default PostIdPage;