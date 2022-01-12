import React, {useEffect, useState} from 'react';

import Comment from "../Comment/Comment";

import "./Comments.css"



const Comments = () => {
    let [comments, setComments] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(item => item.json())
            .then(item => setComments(item))
    }, [])
    return (
        <div className={'comments'}>
            {comments.map(item => <Comment key={item.id} id={item.id} name={item.name} postId={item.postId}
                                         title={item.title} body={item.body}/>)}

        </div>
    );
};

export default Comments;