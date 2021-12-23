import "./styles.css";

import { useEffect, useState, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";

import { PostItem } from "../../PostItem";
import PostsContext from "../../../context/postContext";

export const Homepage = () => {

    const [posts, setPosts] = useState([]);

    const globalState = useContext(PostsContext);

    const history = useHistory();

    //User must LOGIN
    useEffect (
        () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (!user) {
            history.push("/login");
            }
        })
        }, []
    );

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
        <div className="homepage">
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