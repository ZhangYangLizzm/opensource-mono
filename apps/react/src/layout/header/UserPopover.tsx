import { useAuth } from "@/hooks/useAuth";
import {
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Popover, Button } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const UserContent = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const { setIsLogin } = useAuth();

  const onLogout = () => {
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <div className="space-y-2">
      <div className="hover:text-primary cursor-pointer">
        <SettingOutlined className="mr-2" />
        <span>{t("dsRz4qzU3WlLCh-1S00gx")}</span>
      </div>
      <div
        className="text-red-600 hover:text-red-400 cursor-pointer"
        onClick={() => onLogout()}
      >
        <LogoutOutlined className="mr-2" />
        <span>{t("npaF0KYgSp6vDN-Y910iD")}</span>
      </div>
    </div>
  );
};

export const UserPopover = () => {
  return (
    <Popover
      placement="bottom"
      content={UserContent}
    >
      <Button type="text">
        <UserOutlined />
        admin
      </Button>
    </Popover>
  );
};
