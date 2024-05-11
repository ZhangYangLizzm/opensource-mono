import { debounce } from "lodash-es";
import { useLayoutEffect, useState } from "react";

enum Screen {
  Mobile,
  Tablet,
  PC,
}

export const useScreen = () => {
  const [screen, setScreen] = useState(Screen.Mobile);

  const resizeHandler = () => {
    const innerWith = window.innerWidth;
    if (innerWith < 640) {
      setScreen(Screen.Mobile);
    } else if (innerWith < 768) {
      setScreen(Screen.Tablet);
    } else {
      setScreen(Screen.PC);
    }
  };

  window.onresize = debounce(resizeHandler, 100);

  useLayoutEffect(() => {
    resizeHandler();
  }, []);

  const isMobile = screen === Screen.Mobile;

  return { screen, isMobile };
};
