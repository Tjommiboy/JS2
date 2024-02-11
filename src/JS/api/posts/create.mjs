import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/posts";

export async function createPost(postData) {
  const createPostURL = API_SOCIAL_URL + action;

  const response = await authFetch(createPostURL, {
    body: JSON.stringify(postData),
  });
}
