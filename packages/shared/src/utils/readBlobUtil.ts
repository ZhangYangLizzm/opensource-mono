export enum ReadMode {
  DataURL = "dataURL",
  ArrayBuffer = "arrayBuffer",
}

type ResultType<T extends ReadMode> = T extends ReadMode.DataURL
  ? string
  : ArrayBuffer;

const readBlob = <T extends ReadMode>(
  blob: Blob,
  mode: T,
): Promise<ResultType<T>> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // 设置加载完成后的处理
    reader.onload = (event) => {
      resolve(event.target?.result as ResultType<T>);
    };

    // 设置错误处理
    reader.onerror = (error) => {
      reject(error);
    };

    // 根据模式读取数据
    if (mode === ReadMode.DataURL) {
      reader.readAsDataURL(blob);
    } else if (mode === ReadMode.ArrayBuffer) {
      reader.readAsArrayBuffer(blob);
    } else {
      reject(
        new Error("Invalid mode specified. Use 'dataURL' or 'arrayBuffer'."),
      );
    }
  });
};

export { readBlob };
