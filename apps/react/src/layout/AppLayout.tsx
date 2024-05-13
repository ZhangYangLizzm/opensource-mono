import { Layout, Spin } from "antd";
import { Content } from "antd/es/layout/layout";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./header/AppHeader";
import AppSider from "./AppSider";
import { AuthProvider } from "@/provider/AuthProvider";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <AuthProvider>
      <Layout className="h-full overflow-hidden">
        <AppSider collapsed={collapsed} />
        <Layout className="site-layout">
          <AppHeader
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
          <Content className="p-4">
            <Suspense fallback={<Spin size="large" />}>
              <Outlet />
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </AuthProvider>
  );
};

export default AppLayout;
