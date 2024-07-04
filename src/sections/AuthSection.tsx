import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { useAuth } from "../contexts/AuthContext";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

interface AuthFormProps {
  isSignUp: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isSignUp }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    login,
    register,
    loading,
    error,
    success,
    setError,
    setSuccess,
    loginWithGoogle,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      if (isSignUp) {
        navigate("/signIn");
      }
      const userJSON = localStorage.getItem("user");
      if (userJSON) {
        try {
          const user = JSON.parse(userJSON);
          if (user.role === "member") {
            navigate("/");
          } else {
            navigate("/dashboard");
          }
        } catch (error) {
          console.error("Failed to parse user data from localStorage", error);
        }
      }
      setSuccess(false);
    }
  }, [success, isSignUp, navigate, setSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignUp) {
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return;
      }
      await register(username, email, password);
    } else {
      await login(email, password);
    }
  };

  const onSuccess = (response: CredentialResponse) => {
    console.log("Google login success", response);
    if (response.credential) {
      loginWithGoogle(response.credential);
    } else {
      console.error("Google login failed: no credential returned.");
    }
    window.location.href = "/cars";
  };

  const onError = () => {
    console.log("Login error");
  };

  return (
    <div className="grid md:grid-cols-2">
      <div
        className="md:hidden bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('./img/assets/dashboard.png')" }}
      ></div>
      <div
        className="hidden md:block bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('./img/assets/dashboard.png')" }}
      ></div>

      <div className="flex items-center justify-center">
        <div className="p-8 rounded-lg w-full max-w-md relative">
          {loading && (
            <div className="absolute inset-0 bg-neutral-01 bg-opacity-75 flex items-center justify-center">
              <div className="spinner-border animate-spin inline-block w-14 h-14 border-4 rounded-full border-darkblue border-t-transparent"></div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <img
              src="img/assets/logo-putih.png"
              alt="Logo"
              className="w-auto"
            />
            <h2 className="text-2xl font-bold text-left">
              {isSignUp ? "Sign Up to BCR" : "Welcome, Admin BCR"}
            </h2>

            <GoogleLogin onSuccess={onSuccess} onError={onError} />
            {error && (
              <div
                className={`border border-darkblue text-darkblue  px-4 py-3 rounded relative`}
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            {isSignUp && (
              <FormInput
                id="usernameInput"
                label="Username"
                type="text"
                placeholder=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            )}
            <FormInput
              id="emailInput"
              label="Email"
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              id="passwordInput"
              label="Password"
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {isSignUp && (
              <FormInput
                id="confirmPasswordInput"
                label="Confirm Password"
                type="password"
                placeholder=""
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}
            <button
              className={`w-full py-2 px-4 rounded-md text-white bg-darkblue hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-darkblue ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">
              {isSignUp
                ? "Already have an account?"
                : "Sign In with Google Account? "}
              <Link
                to={isSignUp ? "/signIn" : "/signUp"}
                className="text-darkblue font-semibold"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
