import React , { useState, useEffect } from 'react';
import { Header, Footer } from './ReuseableComponents';
import Post from './Post';

// Define the Main component
const MainContent = () => {
    return (
        <main>
            <section>
                <h2>Explore Your World</h2>
                <p>Connect with friends and the world around you on SocialSphere.</p>
            </section>
            <section>
                <h2>Share Your Moments</h2>
                <p>Post photos, videos, and updates to share your life's key moments.</p>
            </section>
        </main>
    );
};

const FadeInComponent = ({ onAddPost }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div>
            <div className={`fadeIn ${visible ? 'visible' : ''}`}>
                Hello, I am fading in!
            </div>
            <button onClick={() => {
                setVisible(!visible);
                onAddPost();
                }}>
                Click me!
            </button>
        </div>
    );
};

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.map((post) => (
                <Post key={post.id} id={post.id} content={post.content} />
            ))}
        </div>
    );
};

// Define the HomePage component
const HomePage = () => {

    const [posts, setPosts] = useState([
        { id: 1, content: 'This is the first post' },
        { id: 2, content: 'This is the second post' },
        { id: 3, content: 'This is the third post' }
    ]);

    const addPost = () => {
        const newPost = { id: posts.length + 1, content: 'This is a new post' };
        setPosts([...posts, newPost]);
    };

    return (
        <div className="container">
            <Header name = "Welcome to SocialSphere1" />
            <MainContent />
            <FadeInComponent onAddPost={addPost} />
            <PostList posts={posts} />
            <Footer />
        </div>
    );
};

export default HomePage;