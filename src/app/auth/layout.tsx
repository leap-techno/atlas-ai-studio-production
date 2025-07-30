import React from "react";

interface AuthLayoutProps {
  children: Readonly<React.ReactNode>;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="w-full h-screen">{children}</div>;
}

export default AuthLayout;
