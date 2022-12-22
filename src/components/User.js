import React from "react";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions";

const User = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.currentUser);

  const user = { name: "Richard Husey" };

  return (
    <>
      <h2>User Authentication</h2>
      {currentUser.loggedIn ? (
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <h1>LogOut</h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h3>Please Login</h3>
          <h1>LogIn</h1>
          <button
            onClick={() => dispatch(allActions.userActions.setUser(user))}
          >
            Login as Richard Husey
          </button>
        </>
      )}
    </>
  );
};

export default User;
