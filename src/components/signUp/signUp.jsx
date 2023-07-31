import React, { useState } from "react";
import "./signUp.scss";
import { Button, TextField } from "@mui/material";
import { Password } from "@mui/icons-material";
import {
  createAuthUserWithEmailAndPassword,
  createUserFromAuth,
} from "../../utilitis/firebase/firebase";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const defaultFormFilds = {
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  };
  const [formFilds, setFormFilds] = useState(defaultFormFilds);
  const { email, password, confirmPassword, displayName } = formFilds;

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormFilds({ ...formFilds, [name]: value });
  };
  const resetFormFilds = () => {
    setFormFilds(defaultFormFilds);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      alert("password doesn't match");
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserFromAuth(user);
      await updateProfile(user, {
        displayName: displayName,
      });
      resetFormFilds();
      console.log(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("user already have an account.");
      } else {
        console.log("user error:", error);
      }
    }
  };
  return (
    <div className="signUp">
      <div className="signUpBox">
        <h2>Don't have any account</h2>
        <form onSubmit={handelSubmit}>
          <TextField
            id="outlined-basic"
            label="Name"
            onChange={handelChange}
            variant="outlined"
            required
            type="text"
            name="displayName"
            value={displayName}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            onChange={handelChange}
            variant="outlined"
            required
            type="email"
            name="email"
            value={email}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            onChange={handelChange}
            variant="outlined"
            required
            type="password"
            name="password"
            value={password}
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            onChange={handelChange}
            variant="outlined"
            required
            type="password"
            name="confirmPassword"
            value={confirmPassword}
          />
          <Button variant="contained" type="submit">
            SIGN UP
          </Button>
        </form>
        <span>Already have an account? <Link to="/auth">SIGN IN</Link></span>
      </div>
    </div>
  );
};

export default SignUp;
