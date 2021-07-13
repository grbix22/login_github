const endpoint = "https://api.github.com/users/grbix22";
let h1 = document.createElement("h1");
document.body.append(h1);
let anchor = document.createElement("a");
let text = document.createTextNode("Visit my GitHub page");
anchor.appendChild(text);
document.body.appendChild(anchor);
let image = document.createElement("img");
document.body.appendChild(image);

fetch(endpoint)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    h1.innerHTML = data.login;
    anchor.href = data.html_url;
    image.src = data.avatar_url;
    image.alt = `${data.login} profile image.`;
  })
  .catch((error) => {
    console.error(error);
  });
