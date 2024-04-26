import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,GithubAuthProvider } from "firebase/auth";
import app from "../../FireBasse/firebase.init";
import { useState } from "react";

const Login = () => {
    const[user,setUser]=useState([]);
    const auth=getAuth(app);
    console.log(app)
    const googleProvider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();

    const handleGoogleSingIn=()=>{
      signInWithPopup(auth,googleProvider)
      .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch(error=>{
        console.log('error',error.message)
      })
    };
    const handleGithubSingIn=()=>{
        signInWithPopup(auth,githubProvider)
        .then(result=>{
            const loggedInUser=result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error=>{
            console.log('error',error.message)
        })
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            setUser(null);
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <div>
            {
                user?
                <button onClick={handleSignOut}>signOut</button>:
                <div>
                    <button onClick={handleGoogleSingIn}>Google LogIn</button>
                    <button onClick={handleGithubSingIn}>Github LogIn</button>
                </div>
                
            }
            {
                user && <div>
                    <h3>User:{user.displayName}</h3>
                    <p>email:{user.email}</p>
                    <img src={user.photoUrl} alt="" />
                    </div>
            }
            
        </div>
    );
};

export default Login;