import { login } from "../api/auth/login.mjs";

export function setLoginFormListner() {
  const form = document.querySelector("#loginform");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // send it to the api
      login(profile);
    });
  }
}
