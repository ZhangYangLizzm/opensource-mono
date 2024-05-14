import UserMedia from "@/views/webRtc/UserMedia";
import { RouteObject } from "react-router-dom";

export const webRtcRoutes: RouteObject = {
  path: "webrtc",
  id: "WebRTC",
  children: [
    {
      path: "user-media",
      element: <UserMedia />,
    },
  ],
};
