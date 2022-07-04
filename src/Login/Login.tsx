import React from "react";
import auth from "../Firebase.config";
import "./Login.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/");
  }
  return (
    <div className=" e">
      <button
        onClick={() => signInWithGoogle()}
        type={"button"}
        className="btn btn-info b"
      >
        Login With Google
      </button>
      <button type={"button"} className="btn btn-info b">
        Register With Google
      </button>
    </div>
  );
};

export default Login;
