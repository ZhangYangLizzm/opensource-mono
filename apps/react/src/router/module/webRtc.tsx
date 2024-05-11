import UserMedia from "@/views/webRtc/UserMedia";
import { lazy } from "react";
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
