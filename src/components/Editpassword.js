import React from "react";
import "./Editpassword.css";

function Editpassword() {
  return (
    <div className="editpassword-container">
      <input
        className="editpasswordInput"
        type="password"
        placeholder="old password"
      />
      <input
        className="editpasswordInput"
        type="password"
        placeholder="new password"
      />
      <input
        className="editpasswordInput"
        type="password"
        placeholder="confirm password"
      />

      <div>Confirm</div>
    </div>
  );
}

export default Editpassword;
