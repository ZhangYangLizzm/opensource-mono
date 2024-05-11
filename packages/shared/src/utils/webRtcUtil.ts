class WebRtcUserMedia {
  private stream: MediaStream | null = null;

  async init(
    element: string,
    options: MediaStreamConstraints = { audio: true, video: true },
  ) {
    const video = document.getElementById(element) as HTMLVideoElement;
    if (video) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(options);
        this.stream = stream;
        video.srcObject = stream;
        video.onloadedmetadata = function () {
          video.play();
        };
        return { stream, err: void 0 };
      } catch (err: unknown) {
        return { err: (err as Error).message };
      }
    }
    return { err: "没有该video元素" };
  }

  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => {
        track.stop();
      });
      this.stream = null;
    }
  }

  getStream() {
    return this.stream;
  }
}

class WebRtcMediaRecorder {
  private recorder: MediaRecorder | null = null;

  private recordData: Blob[] = [];

  private userMediaInstance: WebRtcUserMedia | null = null;

  private elementId: string;

  constructor(elementId: string) {
    this.userMediaInstance = new WebRtcUserMedia();
    this.elementId = elementId;
  }

  async init() {
    const userMediaInstance = new WebRtcUserMedia();

    const { stream } = await userMediaInstance.init(this.elementId, {
      audio: true,
      video: true,
    });

    if (stream) {
      const recorder = new MediaRecorder(stream);
      this.recorder = recorder;
      recorder.ondataavailable = (e) => {
        this.recordData.push(e.data);
      };
    }
  }

  start(timeSlice: number = 1000) {
    this.recorder?.start(timeSlice);
  }

  getRecordBlob() {
    return new Blob(this.recordData, { type: "video/webm" });
  }

  // 截图
  takePhoto() {
    const video = document.getElementById(this.elementId) as HTMLVideoElement;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");
    // 删除创建的canvas元素
    canvas.remove();
    return dataUrl;
  }

  pause() {
    this.recorder?.pause();
  }

  resume() {
    this.recorder?.resume();
  }

  stop() {
    this.recorder?.stop();
    this.userMediaInstance?.stop();
  }
}

class AudioVisual {
  analyser: AnalyserNode | null = null;

  constructor(stream: MediaStream) {
    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaStreamSource(stream);
    const analyser = audioCtx.createAnalyser();
    source.connect(analyser);
  }

  draw() {
    if (this.analyser) {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const bufferLength = this.analyser.frequencyBinCount;
        /**
        *   为什么需要使用Uint8Array？ 1. 减少内存占用 2. 减少GC(垃圾回收)次数
            1.js数组动态变化，uint8Array是固定长度的，不需要每次都重新分配内存
            2.Uint8Array创建时固定大小
            3.直接映射到内存缓冲区，减少js引擎抽象层，可以快速访问
            4.使用Uint8Array可以更高效地传递和操作数据，因为它们可以直接映射到WebAssembly或其他底层接口，而不需要转换为常规JavaScript对象
        */
        const dataArray = new Uint8Array(bufferLength);
        // getByteTimeDomainData 获取音频时域数据
        this.analyser.getByteTimeDomainData(dataArray);
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < bufferLength; i++) {
          const value = dataArray[i];
          //    256是audioCtx.sampleRate(采样率)的值
          const percent = value / 256;
          const height = canvas.height * percent;
          const offset = canvas.height - height - 1;
          const barWidth = canvas.width / bufferLength;
          const hue = (i / bufferLength) * 360;
          ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
          ctx.fillRect(i * barWidth, offset, barWidth, height);
          requestAnimationFrame(this.draw);
        }
      }
    }
  }

  //   暂停draw函数
  pause() {
    this.analyser?.disconnect();
  }
}

export { WebRtcUserMedia, WebRtcMediaRecorder, AudioVisual };
