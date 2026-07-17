import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Welcome Back</h1>

        <p>Login to continue shopping</p>

        <form>

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <div className="login-options">

            <label>

              <input type="checkbox" />

              Remember Me

            </label>

            <a href="#">Forgot Password?</a>

          </div>

          <button type="submit">

            Login

          </button>

        </form>

        <p className="register-text">

          Don't have an account?

          <Link to="/"> Register</Link>

        </p>

      </div>

    </div>
  );
}

export default Login;