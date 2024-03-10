export function postTemplatesA(postData) {
  return ` <div class="post">${postData.title}</div>`;
}

export function postTemplateB(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerText = postData.title;
  const button = document.createElement("button");
  post.append(button);
  button.addEventListener("click", () => console.log(postData));

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media;
    img.alt = `image from ${postData.title}`;
    img.classList.add("postImg");
    post.append(img);
  }

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateB(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB));
}

// async function testFunction() {
//   const posts = await postMethods.getPosts();
//   const container = document.querySelector("#postList");
//   templates.renderPostTemplates(posts, container);
// }
// testFunction();
