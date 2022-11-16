import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../UI/Loader/Loader";


const Comments = () => {



    const params = useParams()
    const id = params.id;

    const [comments, setComments] = useState([]);
    const [fetchCommentsById, isLoadingComments, errorComments] = useFetching(async () => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data);

    })
    useEffect(() => {
       fetchCommentsById(params.id)
    }, [])

    return (

        <div>
            {isLoadingComments
                ? <Loader/>
                :   <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 20}}>
                            1<h3>{comm.email}</h3>
                            <div>{comm.body}</div>
                        </div>
                    )}

                </div>
            }
        </div>

    );
};

export default Comments;