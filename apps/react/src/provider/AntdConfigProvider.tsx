import { ConfigProvider, message } from "antd";

const antdProviderData = {
  token: {
    colorPrimary: "#1677ff",
  },
};

export const AntdConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [_, messageContextHolder] = message.useMessage();

  return (
    <ConfigProvider theme={antdProviderData}>
      {messageContextHolder}
      {children}
    </ConfigProvider>
  );
};
