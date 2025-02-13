import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import AuthInput from "../../common/modules/AuthInput/AuthInput";
import AuthSubmitButton from "../../common/modules/AuthSubmitButton/AuthSubmitButton";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate(); // Call useNavigate at the top level

  const { loginUser, loading, error: authError } = useAuth(); // Destructure loginUser, loading, and error from useAuth

  const onSubmit = async (data) => {
    try {
      const payload = {
        phoneOrGmail: data.emailOrPhone,
        password: data.password,
        rememberMe: data.rememberMe,
      };

      const response = await loginUser(payload); // Get the response here

      if (response.success) {
        Cookies.set("jwt", response.token, {
          expires: response.rememberMe ? 30 : 1, // Expires in 30 days if "remember me" is checked, otherwise 1 day
          secure: true, // Ensure the cookie is only sent over HTTPS
          sameSite: "strict", // Prevent cross-site requests
        });
        setTimeout(() => {
         navigate("/")
        }, 2000);
        alert(response.message);
      } else {
        console.log(response.message); // Log the failure message
      }
    } catch (err) {
      // Handle errors when loginUser fails (e.g., network error)
      console.error(err); // Log the error
      console.log("Error during login: ", err.message); // Log the error message
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-sm bg-white m-10"
    >
      <h2 className="font-extrabold text-center text-3xl text-green-900 mb-10 mt-5">
        ورود به حساب کاربری
      </h2>
      {/* Email or Phone Number Input */}
      <AuthInput
        register={register}
        name="emailOrPhone"
        placeholder="ایمیل"
        rules={{
          required: "Email or Phone Number is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$|^[0-9]{10,}$/i,
            message: "Invalid email or phone number",
          },
        }}
        error={errors.emailOrPhone}
      />

      {/* Password Input */}
      <AuthInput
        register={register}
        name="password"
        placeholder="پسورد"
        type="password"
        rules={{
          required: "Password is required",
          minLength: {
            value: 4,
            message: "Password must be at least 8 characters",
          },
        }}
        error={errors.password}
      />

      {/* Remember Me Checkbox */}
      <div className="flex items-center justify-center mb-4 gap-2">
        <input type="checkbox" {...register("rememberMe")} className="mr-2 " />
        <label className="text-sm text-gray-700">به یاد داشته باش</label>
      </div>

      {/* Display Auth Error */}
      {authError && (
        <div className="text-red-500 text-sm mb-4">{authError}</div>
      )}

      {/* Submit Button */}
      <AuthSubmitButton title="تایید" loading={loading} />
    </form>
  );
};

export default LoginForm;
