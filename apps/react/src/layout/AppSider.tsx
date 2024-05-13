import Sider from "antd/es/layout/Sider";
import { useMatches } from "react-router-dom";
import { MenuRouteConfig } from "@/config/menuRouteConfig";
import { Menu } from "antd";
import reactIcon from "@/assets/react.svg";
import { MenuRouteConfigStruct } from "@/config/menuRouteConfig";
import { Link } from "react-router-dom";
import { ItemType, MenuItemType } from "antd/es/menu/hooks/useItems";
const Logo = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <div className="flex gap-2 justify-center items-center h-16">
      <img
        src={reactIcon}
        alt="Logo"
        className="w-6 h-6"
      />
      {!collapsed ? <h1 className="text-primary">React18</h1> : ""}
    </div>
  );
};

const generateMenuItems = (
  routes: MenuRouteConfigStruct[],
  parentPath?: string,
): ItemType<MenuItemType>[] => {
  return routes.map((item) => {
    if (item.type === "menuGroup") {
      return {
        ...item,
        children: generateMenuItems(
          item.children!,
          parentPath ? parentPath + "/" + item.path : item.path,
        ),
      };
    } else {
      return {
        ...item,
        label: (
          <Link to={parentPath ? parentPath + "/" + item.path : item.path}>
            {item.label}
          </Link>
        ),
      };
    }
  });
};

const AppSider = ({ collapsed }: { collapsed: boolean }) => {
  const matches = useMatches();
  const selectedKeys = matches.map((item) => item.id);
  const MenuItems = generateMenuItems(MenuRouteConfig);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
    >
      {/* //侧边栏Logo容器 */}
      <Logo collapsed={collapsed} />
      {/* 菜单栏 */}
      <Menu
        selectedKeys={selectedKeys}
        mode="inline"
        items={MenuItems}
      />
    </Sider>
  );
};

export default AppSider;
