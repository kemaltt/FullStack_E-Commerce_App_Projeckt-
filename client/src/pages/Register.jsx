import React, { useRef } from "react";

export default function Register() {
  const inputRef = useRef({
    email: "",
    password: "",
    name: "",
    surname: "",
  });
  const handleInputChange = (e) => {
    const name = e.target.name;
  };
  return (
    <div>
      <div className="login">
        <img src="https://picsum.photos/500/400" alt="random" />
        <div className="form">
          <h1> Register </h1>{" "}
          <form action="">
            <label htmlFor=""> Name </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              required
              onChange={handleInputChange}
            />
            <i class="las la-user"></i>
            <label htmlFor=""> Last Name </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter lastname"
              required
            />
            <i class="las la-user"></i>
            <label htmlFor=""> Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
            />
            <i class="las la-envelope"></i>
            <label htmlFor=""> Password </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
            <i class="las la-lock"></i>
            <input type="submit" name="submit" value="register" />
          </form>
        </div>
      </div>
    </div>
  );
}
