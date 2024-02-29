import { createPost } from "../api/posts/index.mjs";

export function setCreatePostListner() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      // send it to the api
      createPost(post);
    });
  }
}
