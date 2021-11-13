import React, { useContext } from "react";
import { myContext } from "./Context";

export default function Profile() {
  const ctx = useContext(myContext);

  return (
    <div className="centrarContenido">
        <h1>Profile</h1>
      <div>
        <p>Current user : {ctx.username}</p>
      </div>
    </div>
  );
}
