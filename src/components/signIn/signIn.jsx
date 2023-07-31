import React, { useEffect, useState } from "react";
import "./signIn.scss";
import { Button, IconButton, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import {
  signInAuthWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utilitis/firebase/firebase";
import { Link, useNavigate} from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate()
  const googleSignIn = async () => {
    const { user } = await signInWithGooglePopup();

    console.log(user);
  };

  const defaultFromFilds = {
    email: "",
    password: "",
  };

  const [formFilds, setFormFilds] = useState(defaultFromFilds);

  const { email, password } = formFilds;
  const handelChange = (e) => {
    const { name, value } = e.target;

    setFormFilds({ ...formFilds, [name]: value });
  };
  const resetFormFilds = () => {
    setFormFilds(defaultFromFilds);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const {user} = await signInAuthWithEmailAndPassword(email, password);
      console.log(user);
      navigate("/");
      resetFormFilds();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("on user associated with this email");
          break;
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };
  return (
    <div className="signIn">
      <div className="signInBox">
        <h2>Already have an acount</h2>
        <form onSubmit={handelSubmit}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            onChange={handelChange}
            value={email}
            required
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            onChange={handelChange}
            value={password}
            required
          />
          <div className="buttons">
            <Button variant="contained" type="submit">
              SIGN IN
            </Button>
            <Button variant="contained" onClick={googleSignIn}>
              SIGN IN WITH GOOGLE
            </Button>
          </div>
        </form>
        <span>
           Haven't any account? <Link to="signUp" >SIGN UP</Link>
        </span>
      </div>
    </div>
  );
};

export default SignIn;
