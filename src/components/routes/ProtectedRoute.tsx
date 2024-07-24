import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import React from "react";

type TProps = {
  children?: React.ReactNode;
};

export const ProtectedRoute = ({ children }: TProps) => {
  const token = Cookies.get("access-token-cookie");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <div>{children}</div>;
};
