import { register } from "../api/auth/register.mjs";

export function setRegisterFormListner() {
  const form = document.querySelector("#registerform");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    // send it to the api
    register(profile);
  });
}
