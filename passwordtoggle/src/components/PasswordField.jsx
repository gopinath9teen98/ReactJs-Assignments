import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./PasswordField.css";

const PasswordField = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <form>
      
      
      <div className="form-group">
        

        <label htmlFor="password">Password</label>
        <div className="input-icon">
          <input
            type={isShowPassword ? "text" : "password"}
            name="password"
            id="password"
          />
          <div
            className="icon-container"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? (
              <FaRegEye className="icon" />
            ) : (
              <FaRegEyeSlash className="icon" />
            )}
          </div>
        </div>
      </div>
      <button>LOGIN</button>
    </form>
  );
};

export default PasswordField;
