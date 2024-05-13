import { useLocale } from "@/hooks/useLocale";

import { LangKey } from "@packages/shared";

import { GlobalOutlined } from "@ant-design/icons";
import { Dropdown, Button, MenuProps } from "antd";

export const LocaleDropdown = () => {
  const { localeText, setLocale } = useLocale();

  const LangList: MenuProps["items"] = [
    {
      key: "zh-CN",
      label: <span onClick={() => setLocale(LangKey["zh"])}>简体中文</span>,
    },
    {
      key: "en-US",
      label: <span onClick={() => setLocale(LangKey["en"])}>English</span>,
    },
  ];

  return (
    <Dropdown
      menu={{ items: LangList }}
      placement="bottomRight"
    >
      <Button type="text">
        <GlobalOutlined />
        {localeText}
      </Button>
    </Dropdown>
  );
};
