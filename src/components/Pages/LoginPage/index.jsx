import "./styles.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
    const [mode, setMode] = useState("login");

    const {register, handleSubmit} = useForm();

    //LOGIN
    const loginUser = async(formVals) => {
        try {
            console.log("Login Submitted", formVals);
            const auth = getAuth();
            const loginUser = await signInWithEmailAndPassword(auth, formVals.user, formVals.password);
            setMode("profile");

        } catch (error) {
            console.log("Error connecting to firebase", error);
        }
    }

    //SIGN UP
    const signUpUser = async(formVals) => {
        console.log("Sign Up Submitted", formVals);
        const auth = getAuth();

        try {
            const signUpUser = await createUserWithEmailAndPassword(auth, formVals.user, formVals.password);
            console.log("New user was created", signUpUser);

        } catch (error) {
            console.log("Error from firebase", error);
        }
    }

    return (
        <div className="user-page">
            { mode === "login" && (
                <form className="form-layout" onSubmit={handleSubmit(loginUser)}>
                    <h2>Login to view your profile.</h2>
                    <br/>

                    <label htmlFor="user">Username</label>
                    <input type="email" name="user" required {...register('user')}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required {...register('password')}/>

                    <input type="submit" value="Login"/>
                    <br/>
                    <p>Don't have an account? Sign up today!</p>
                    <button onClick={()=> setMode("signup")}>Sign Up</button>
                </form>
            )}

            { mode === "signup" && (
                <form className="form-layout" onSubmit={handleSubmit(signUpUser)}>
                    <h2>Create Account</h2>
                    <br/>

                    <label htmlFor="user">Email</label>
                    <input type="email" name="user" required {...register('user')}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required {...register('password')}/>

                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <input type="password" name="passwordConfirm" required {...register('passwordConfirm')}/>

                    <input type="submit" value="Sign Up"/>
                    <br/>
                    <p>Have an account already?</p>
                    <button onClick={()=> setMode("login")}>Login</button>
                </form>
            )}
        </div>
    )
}