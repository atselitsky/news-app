function urlConstructor(url, params) {
  let query = params.query ? `&q=${params.query}` : ``;
  let sortBy = params.sortBy
    ? `&sortBy=${params.sortBy}`
    : `&sortBy=publishedAt`;
  let pageSize = params.pageSize
    ? `&pageSize=${params.pageSize}`
    : `&pageSize=5`;
  let from = params.from ? `&from=${params.from}` : ``;
  let to = params.to ? `&to=${params.to}` : ``;
  return `${url}&page=${params.pageNumber}${query}${sortBy}${pageSize}${from}${to}`;
}
export default urlConstructor;
