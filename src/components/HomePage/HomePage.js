import React from "react";
import { auth } from "../../firebase/firebase";
import "./HomePage.css";
import firebase from "firebase";

function HomePage() {
  // const { user } = useAuth();
  const provider = new firebase.auth.GoogleAuthProvider();

  return (
    <>
      <div className="homepage">
        <div className="webname">
          <h1>Jobs Near You</h1>
        </div>
        <div className="logincontainer">
          <div className="logincontainerbtn">
            <button
              className="signinbtn"
              onClick={() => {
                auth.signInWithPopup(provider);
              }}
            >
              Sign In With Google
            </button>
          </div>
        </div>

        {/* <div className="content">
          <div className="homecontentheading">
            <h1>Who we are?</h1>
          </div>
          <div className="homecontent">
            <h3>
              A Community helping others know the job opportunities around them.
            </h3>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default HomePage;
