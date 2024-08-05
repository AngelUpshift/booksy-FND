import { Navigate } from "react-router-dom";
import React from "react";

type TProps = {
  children?: React.ReactNode;
};

export const ProtectedRoute = ({ children }: TProps) => {
  const token = localStorage.getItem("token");

  if (token === null || token === "undefined") {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
