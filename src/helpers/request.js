function request(url, commit) {
  let req = new Request(url);
  fetch(req)
    .then(response => {
      response.json().then(data => {
        commit("saveNews", data);
      });
    })
    .catch(error => {
      throw new Error(`Api ${error}`);
    });
}
export default request;
