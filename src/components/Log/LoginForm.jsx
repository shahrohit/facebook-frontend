import { useState } from "react";
import Input from "./Input";
import "./log.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form action="" className="form">
      <h1>Login to Facebook</h1>
      <Input
        type="email"
        name="email"
        placeholder="Email address or phone number"
        value={user.email}
        handleUser={handleUser}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={user.password}
        handleUser={handleUser}
      />

      <button className="btn loginBtn" onClick={handleLogin}>
        Login
      </button>
      <div className="forgetTextBox">
        <Link to={"/forgetpassword"} className="forgetText">
          Forget Password?
        </Link>
      </div>

      <hr />
      <Link to="/signup">
        <button className="btn createBtn">Create New Account</button>
      </Link>
    </form>
  );
};

export default LoginForm;
