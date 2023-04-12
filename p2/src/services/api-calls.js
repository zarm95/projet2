const baseUrl = "https://acnhapi.com/v1a";

function getFossils() {
  return fetch(`${baseUrl}/fossils`).then((res) => res.json());
}
function getVillagers() {
  const url = "https://api.nookipedia.com/villagers";
  fetch(url, {
    method: "GET",
    headers: {
      "X-Auth-Token": "60c5ba1a-ef3f-4e7f-936d-f6f9cd0fbf58",
    },
  }).then((res) => res.json());
}
export { getFossils, getVillagers };
