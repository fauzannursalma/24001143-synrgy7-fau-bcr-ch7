import React, { useEffect } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../sections/AuthSection";
import { isAuthenticated } from "../../utils/AuthUtils";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);
  return (
    <>
      <AuthForm isSignUp={true} />
    </>
  );
};

export default SignUpPage;
