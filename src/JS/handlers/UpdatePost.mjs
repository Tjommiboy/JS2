import { updatePost } from "../api/posts/index.mjs";

export function setUpdatePostListner() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      updatePost(post);
    });
  }
}

// let testPostId = localStorage.getItem("testPostId");

// function updateTest() {
//     if (!testPostId) {
//         // make a new post if there isn't one already
//         const { id } = await createPost(someDetailsHere);
//         testPostId = id;
//     }

//     await updatePost({ id, ...someDetailsHere })
// }
