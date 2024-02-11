import { load } from "../../handlers/storage/localstorage.mjs";
export function headers() {
  const token = load();

  return {
    "Content-Type": "application/json",
    Authorization: `Bear ${token}`,
  };
}

export async function authFetch(url, options) {}
