import { webAppSettings } from "../websettings";

export function login(username: string, password: string) {
  const apiUrl = webAppSettings.apiUrl;
  const loginUrl = apiUrl + "api/Auth/login";

  return fetch(loginUrl, {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}
