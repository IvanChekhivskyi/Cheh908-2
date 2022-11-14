import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";


const Comments = (id, params) => {

    const [comments, setComments, open] = useState({});
    const [fetchCommentsById, isLoadingComments, errorComments] = useFetching(async () => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data);

    })
console.log(open);
    useEffect(() => {
        fetchCommentsById(params.id)
    }, [])

    return (isLoadingComments,
        <div>
            <div>{comments.name}</div>
            <div>{comments.email}</div>
            <div>{comments.body}</div>
        </div>
    );

};

export default Comments;