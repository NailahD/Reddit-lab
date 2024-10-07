const thirdContainer = document.getElementById("third-container");

const searchBtn = document.getElementById("lets-go");

searchBtn.addEventListener("click", () => {
  const searchBar = document.getElementById("search-bar").value;
  fetch(`https://www.reddit.com/r/${searchBar}/.json`)
    .then((response) => response.json())
    .then((newData) => {
      const newPosts = newData.data.children;
      newPosts.forEach((post) => {
        const newData = post.data;

        const newDiv = document.createElement("div");
        const newTitle = document.createElement("h2");
        const newLink = document.createElement("a");

        newTitle.textContent = newData.title;
        newLink.href = `https://www.reddit.com${newData.permalink}`;
        newLink.textContent = "View Post";

        newDiv.appendChild(newTitle);
        newDiv.appendChild(newLink);

        thirdContainer.appendChild(newDiv);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
