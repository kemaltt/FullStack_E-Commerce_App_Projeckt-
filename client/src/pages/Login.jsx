import React from "react";

export default function Login() {
  return (
    <div>
      <div className="login">
        <img src="https://picsum.photos/500/400" alt="random" />
        <div className="form">
          <h1> Account Login </h1>
          <form action="">
            <label htmlFor=""> Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
            />
            <i id="login-email" class="las la-envelope"></i>
            <label htmlFor=""> Password </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
            />
            <i id="login-password" class="las la-lock"></i>
            <input type="submit" name="submit" value="login" />
          </form>
          <div className="account-login">
            <a href="/register"> Don `t have an account</a>
            <a href="">Forgot password</a>
          </div>
        </div>
      </div>
    </div>
  );
}
