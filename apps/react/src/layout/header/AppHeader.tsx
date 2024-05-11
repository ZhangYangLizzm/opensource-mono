import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";

import { UserPopover } from "./UserPopover";
import { LocaleDropdown } from "./LangDropdown";
import { RouteBreadcrumb } from "./RouteBreadcrumb";

interface AppHeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const AppHeader = ({ collapsed, setCollapsed }: AppHeaderProps) => {
  return (
    <Layout.Header className="bg-white px-4 flex justify-between">
      <div className=" flex items-center gap-4">
        <div
          onClick={() => setCollapsed(!collapsed)}
          className="cursor-pointer hover:text-primary"
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
        <RouteBreadcrumb />
      </div>

      <div className="flex items-center">
        <LocaleDropdown />

        <UserPopover />
      </div>
    </Layout.Header>
  );
};

export default AppHeader;
