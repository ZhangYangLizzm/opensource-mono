import React from "react";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./locales";
import { RouterProvider } from "@/provider/RouterProvider";
import { AntdConfigProvider } from "./provider/AntdConfigProvider";
import { ReduxProvider } from "./provider/ReduxProvider";

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ReduxProvider>
        <AntdConfigProvider>
          <RouterProvider />
        </AntdConfigProvider>
      </ReduxProvider>
    </I18nextProvider>
  );
};

export default App;
