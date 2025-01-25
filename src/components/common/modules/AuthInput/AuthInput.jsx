// AuthInput.jsx
import React from "react";
import { useForm } from "react-hook-form";

const AuthInput = ({
  register,
  name,
  placeholder,
  rules,
  type = "text",
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        {...register(name, rules)}
        placeholder={placeholder}
        style={{
          borderColor: error ? "red" : "",
          marginBottom: "10px",
          padding: "8px",
          width: "60%",
          outline: "none",
          borderRadius: "0.5rem",
          boxShadow:'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)'
        }}
      />
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </div>
  );
};

export default AuthInput;
