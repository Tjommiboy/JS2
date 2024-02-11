const API_BASE_URL = "https://api.noroff.dev";
// import {loginUser} from './ui/formverify';

// End-points:
// Register: /api/v1/social/auth/register
// Login: /api/v1/social/auth/login
// Get all EndPoints: /api/v1/social/posts

//.-------------------------- registers users

/**
 *  API call that registers the users
 * @param {string} url 
 * @param {any} userData 
 * 
// registerUser(registerUrl, userToRegister);
 */
async function registerUser(url, userData) {
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

// -------------------login user----------->

async function loginUser(url, userData) {
  try {
    const postData = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();
    console.log(json);

    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
    //
  } catch (error) {
    console.log(error);
  }
}

const userTologin = {
  email: "test_user@stud.noroff.no",
  password: "circleoffifths",
};

const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

// loginUser(loginUrl, userTologin);

//---------------- request with token

async function getWithToken(url) {
  try {
    console.log(url);
    const token = localStorage.getItem("accessToken");
    console.log(token);
    const fetchOptions = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, fetchOptions);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

const postsUrl = `${API_BASE_URL}/api/v1/social/posts`;

getWithToken(postsUrl);
