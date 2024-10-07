const secondContainer = document.getElementById("second-container");

fetch(`https://www.reddit.com/r/nosleep/.json`)
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
      newLink.textContent = "Read It!";

      newDiv.appendChild(newTitle);
      newDiv.appendChild(newLink);

      secondContainer.appendChild(newDiv);
    });
  })
  .catch((error) => {
    console.log(error);
  });
