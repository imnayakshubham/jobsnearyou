import React, { useContext, useState } from "react";
import { auth } from "../../firebase/firebase";
import "./Header.css";
import { AuthContext } from "../../contexts/AuthContext";

function Header() {
  const user = useContext(AuthContext).user;
  const [loggedout, setloggedout] = useState(false);
  return (
    <div className="header">
      <div className="header__left">
        <h1>Jobs Near You</h1>
      </div>
      <div className="header__right">
        {!loggedout ? (
          <div className="userinfo">
            <img
              src={user.photoURL ? user.photoURL : ""}
              alt={user.displayName ? user.displayName : ""}
              className="userlogo"
            />
            <span>{user.displayName}</span>
          </div>
        ) : (
          ""
        )}

        <button
          className="logoutbtn"
          onClick={() => {
            auth.signOut();
            setloggedout(true);
            localStorage.removeItem("userInfo");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
