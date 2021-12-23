import "./styles.css";

import { Link } from "react-router-dom";

export const PostItem = (props) => {
    const {username, userPhoto, text, id} = props;

    return (
        <div className="post">
            <div className="user-info">
                <img className="user-photo" src={userPhoto} alt={username + "photo"}/>
                <h2 className="user-name">{username}</h2>
            </div>
            <p className="post-text">{text}</p>
            <p hidden className="post-id">{id}</p>
        </div>
    )
}

PostItem.defaultProps = {
    image: "https://cdns-images.dzcdn.net/images/artist/77220ccb5a36d0e5df2c9e47f2c89de4/500x500.jpg"
}