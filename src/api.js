export function fetchCatData() {
  const url = "https://api.pexels.com/v1/search?query=cat+query&per_page=80";
  return fetch(url, {
    method: "GET",
    headers: {
      Authorization: "563492ad6f91700001000001dd1dd81492e14f23b7abe30f0232f13f"
    }
  })
    .then(r => r.json())
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(e => {
      console.log("Couldn't fetch the data");
    });
}
