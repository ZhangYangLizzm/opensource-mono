export const Headers = ["id", "title", "author", "readings", "date"];

export const columns = Headers.map((item) => {
  return {
    header: item,
    key: item,
  };
});
