import domainurl from "../domainAPI";

export async function auth({ user, password }) {
  const body = JSON.stringify({ user, password });
  const response = await fetch(`http://localhost:5000/auth`, {
    method: "POST",
    body: body,
    headers: {
      'Content-Type': 'application/json'
    },
  });
  return response.json();
}