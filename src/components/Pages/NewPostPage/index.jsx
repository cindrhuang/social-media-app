import "./styles.css";

import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const NewPostPage = () => {

  const { register, handleSubmit } = useForm ();
  const history = useHistory();
  const auth = getAuth();

  //User must LOGIN
  useEffect (
    () => {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
        history.push("/login");
        }
    })}, []
  );

  const submitPost = async (formVals) => {
    const formattedData = {
        fields: {
            username: { stringValue: auth.currentUser.email },
            userPhoto: { stringValue: formVals.userPhoto },
            text: { stringValue: formVals.text },
            id: { stringValue: formVals.id },
        }
    }

    console.log (formVals, formattedData);
    try {
        const response = await fetch("https://firestore.googleapis.com/v1/projects/social-media-4012/databases/(default)/documents/posts/",
        {    
            headers: { "Content-Type" : "application/json" },
            method: "POST",
            body: JSON.stringify(formattedData)
        })
        history.push("/");
    } catch (error) {
        console.log("Error", error);
    }
  }; 

  return (
    <div className="new-post-page">
        <form className="form-layout" onSubmit={handleSubmit(submitPost)}>
            <h2>New Bloggy</h2>
            <br/>

            <label htmlFor="userPhoto"> Profile Photo </label>
            <input {...register("userPhoto")} name="userPhoto" required/>

            <label htmlFor="text"> What do you want to share? </label>
            <input {...register("text")} name="text" required type="text" className="text-box"/>

            <label htmlFor="userPhoto"> Post ID </label>
            <input {...register("id")} name="id" required/>

            <input type="submit" values="Post"/>
            <br/>
        </form>
    </div>
  );
}