import { isLoginStorageKey } from "@/config/storageKey";
import { useLocalStorageState } from "ahooks";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useLocalStorageState<boolean | undefined>(
    isLoginStorageKey,
    {
      defaultValue: false,
    },
  );

  return { isLogin, setIsLogin };
};
