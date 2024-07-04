import React, { useEffect } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../sections/AuthSection";
import { isAuthenticated } from "../../utils/AuthUtils";

const SignInPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <AuthForm isSignUp={false} />
    </>
  );
};

export default SignInPage;
