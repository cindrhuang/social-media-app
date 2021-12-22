import "./styles.css";

import { Link } from "react-router-dom";

export const PostItem = (props) => {
    const {username, userPhoto, text, id} = props;

    return (
        <div className="post">
            <div className="user-info">
                <img className="user-photo" src={userPhoto} alt={username + "photo"}/>
                <h1 className="user-name">{username}</h1>
            </div>
            <p className="post-text">{text}</p>
            <p hidden className="post-id">{id}</p>
        </div>
    )
}