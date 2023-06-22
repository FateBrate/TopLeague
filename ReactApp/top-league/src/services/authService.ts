import { webAppSettings } from "../websettings";

export function login(username: string, password: string) {
  const apiUrl = webAppSettings.apiUrl;
  const loginUrl = apiUrl + "api/Auth/login";
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Login failed");
      }
    })
    .then((data) => {
      localStorage.setItem("user", username);
    })
    .catch((error) => {
      console.error("Login failed:", error);
      if (error instanceof Error && error.message === "Login failed") {
        alert("Invalid username or password. Please try again.");
      } else {
        alert("Login failed. Please try again.");
      }
      throw error;
    });
}
