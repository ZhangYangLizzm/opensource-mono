import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useAuth();

  if (isLogin) {
    return <> {children}</>;
  } else return <Navigate to="/login" />;
};
