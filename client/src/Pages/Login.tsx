import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = () => {
    axios
      .post(
        "http://localhost:4000/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then(
        (res: AxiosResponse) => {
          if (res.data === "success") {
            window.location.href = "/";
          }
        },
        () => {
          console.log("Failure");
        }
      );
  };

  return (
    <div>
      <div className="centrarContenido">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="User"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
