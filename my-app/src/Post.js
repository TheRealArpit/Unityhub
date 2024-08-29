import React from 'react';

// Define the Post component
const Post = ({ id, content }) => {
    return (
        <div className="post">
            <div className="post-content">
                <h2>{id}</h2>
                {content}
            </div>
            <div className="post-actions">
                <button onClick={() => alert('Liked!')}>Like</button>
                <button onClick={() => alert('Shared!')}>Share</button>
                <button onClick={() => alert('Comment opened!')}>Comment</button>
            </div>
        </div>
    );
};

export default Post;