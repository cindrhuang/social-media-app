import "./styles.css";

import { useEffect, useState, useContext } from "react";

import { PostItem } from "../../PostItem";
import PostsContext from "../../../context/postContext";

export const MyPage = () => {

    const [posts, setPosts] = useState([]);

    const globalState = useContext(PostsContext);

    useEffect (() => {
        getPosts();
    }, []);

    const getPosts = async() => {
        try {
            const response = await fetch ("https://firestore.googleapis.com/v1/projects/social-media-4012/databases/(default)/documents/posts/");
            const data = await response.json();
            const formattedData = data.documents.map((item) => {
                return item.fields;
            });

            setPosts(formattedData);
            globalState.initializePosts(formattedData);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="my-page">
            <div className="posts-container">
                {
                    posts.map((posts) => (
                        <PostItem
                        key={posts.id.stringValue}
                        username={posts.username.stringValue}
                        userPhoto={posts.userPhoto.stringValue}
                        text={posts.text.stringValue}/>
                    ))
                }
            </div>
        </div>
    )
}