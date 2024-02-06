import { useState } from "react";
import Input from "./Input";
import RadioBtn from "./RadioBtn";
import "./log.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
  });

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form action="" className="form">
      <h1>Create Account</h1>
      <div className="formNameBox">
        <Input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={user.firstName}
          handleUser={handleUser}
        />
        <Input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={user.lastName}
          handleUser={handleUser}
        />
      </div>
      <Input
        type="email"
        placeholder="Email address or phone number"
        name="email"
        value={user.email}
        handleUser={handleUser}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={user.password}
        handleUser={handleUser}
      />
      <div>
        <p className="inputLabel">Date of Birth</p>
        <Input
          type="date"
          placeholder="Date"
          name="dateOfBirth"
          value={user.dateOfBirth}
          handleUser={handleUser}
        />
      </div>
      <RadioBtn name="gender" value={user.gender} handleUser={handleUser} />

      <button
        className="btn"
        id="createBtnSignup"
        onClick={handleCreateAccount}
      >
        Create Account
      </button>
      <div className="forgetTextBox">
        <Link to={"/forgetpassword"} className="forgetText">
          Forget Password?
        </Link>
      </div>

      <hr />
      <Link to="/login">
        <button className="btn" id="loginBtnSignup">
          Login to Facebook
        </button>
      </Link>
    </form>
  );
};

export default SignupForm;
