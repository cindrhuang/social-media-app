import "./styles.css";

import { useEffect, useState, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";

import { PostItem } from "../../PostItem";
import PostsContext from "../../../context/postContext";

export const MyPage = () => {

    const [allPosts, setAllPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);

    const globalState = useContext(PostsContext);

    const auth = getAuth();
    const history = useHistory();

    const userEmail = auth.currentUser.email;

    //User must LOGIN
    useEffect (
        () => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
            history.push("/login");
            }
        })
        }, []
    );

    useEffect (() => {
        getPosts();
        showMyPosts();
    }, []);

    const getPosts = async() => {
        try {
            const response = await fetch ("https://firestore.googleapis.com/v1/projects/social-media-4012/databases/(default)/documents/posts/");
            const data = await response.json();
            const formattedData = data.documents.map((item) => {
            return item.fields;
            });

            setAllPosts(formattedData);
            //setMyPosts(formattedData);
            globalState.initializePosts(formattedData);
        } catch (err) {
            console.log(err);
        }
    }

    const showMyPosts = () => {
        const filterMyPosts = allPosts.filter (
            (posts) => {
                const email = posts.username.stringValue;
                const isMatch = email.indexOf(userEmail);

                return isMatch !== -1;
            }
        )
        console.log(userEmail);
        setMyPosts(filterMyPosts);
    }

    return (
        <div className="my-page">
            <div className="my-profile">
                <h2>Welcome back {auth.currentUser.email}!</h2>
                <p>View the posts you've made below.</p>
            </div>
            <div className="posts-container">
                {
                    myPosts.map((posts) => (
                        <PostItem
                        key={posts.id.stringValue}
                        username={posts.username.stringValue}
                        userPhoto={posts.userPhoto.stringValue}
                        text={posts.text.stringValue}/>
                    ))
                }
                {
                    myPosts.length === 0 && <p>No posts yet.</p>
                }
            </div>
        </div>
    )
}