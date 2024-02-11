import { setRegisterFormListner } from "./handlers/register.mjs";
import { setLoginFormListner } from "./handlers/login.mjs";
import * as posts from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/register/index.html") {
  setRegisterFormListner();
} else if (path === "/profile/login/index.html") {
  setLoginFormListner();
}
