import { WebRtcUserMedia } from "@packages/shared";
import { useLayoutEffect, useState } from "react";

const UserMedia = () => {
  const instance = new WebRtcUserMedia();
  const [err, setError] = useState();

  useLayoutEffect(() => {
    instance.init("webRtc", { video: true }).then((res) => {
      if (res.err) {
        setError(res.err);
      }
    });

    return () => {
      instance.stop();
    };
  });

  return (
    <div className="rounded">
      <p>{err}</p>
      <video
        id="webRtc"
        style={{ transform: "rotateY(180deg)" }}
      ></video>
    </div>
  );
};

export default UserMedia;
