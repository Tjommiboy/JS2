import { API_BASE_URL } from "../constants/constants";

export async function registerUser(url, userData) {
  try {
    const postData = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    // console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
}
const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

const userToRegister = {
  name: "my_test_user",
  email: "test_user@stud.noroff.no",
  password: "circleoffifths",
};

// registerUser(registerUrl, userToRegister);
