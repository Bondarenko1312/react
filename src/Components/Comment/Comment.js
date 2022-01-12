import React from 'react';

const Comment = (props) => {
    let {id, postId,title,body,name}=props
    return (
        <div>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>postId: {postId}</p>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default Comment;