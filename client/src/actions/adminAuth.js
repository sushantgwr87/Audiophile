import domainurl from "../domainAPI";

export async function auth({ user, password }) {
  const body = JSON.stringify({ user, password });

  const res = await domainurl.post("admin/auth", body);

  console.log(res.data)
  // return response.json();
}