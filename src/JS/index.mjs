import * as listners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
// import { renderPostTemplate } from "./templates/index.mjs";

const path = location.pathname;

if (path === "/profile/register/index.html") {
  listners.setRegisterFormListner();
} else if (path === "/profile/login/index.html") {
  listners.setLoginFormListner();
} else if (path === "/post/create/") {
  listners.setCreatePostListner();
} else if (path === "/post/edit/") {
  listners.setUpdatePostListner();
}

// async function testFunction() {
//   const posts = await postMethods.getPosts();

//   const container = document.querySelector("#post");
//   templates.renderPostTemplates(posts, container);
// }
// testFunction();
