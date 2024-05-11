const downloadUtil = (buffer: Blob, fileName: string): void => {
  const a = document.createElement("a");
  const blob = new Blob([buffer], { type: "text/plain" });
  a.download = `${fileName}.xlsx`;
  a.href = URL.createObjectURL(blob);
  a.click();
  a.remove()
};

export { downloadUtil };
