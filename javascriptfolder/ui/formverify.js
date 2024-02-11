const userEmail = document.getElementById("#emailadress").value;
const userPassword = document.getElementById("#password").value;

export function loginUser() {
  const userLogin = {
    email: userEmail,
    password: userPassword,
  };
}
