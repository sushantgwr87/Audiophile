export async function auth({login,user}) {
    await fetch(`http://localhost:5000/auth`, {
     method: "POST",
     body: JSON.stringify(),
     headers: {
       'Content-Type': 'application/json'
     },
   });
}