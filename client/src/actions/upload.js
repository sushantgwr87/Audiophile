import domainurl from "../domainAPI";

export async function imageUpload(image) {
  const body = new FormData();
  console.log(image);
  body.append("image", image);
  console.table([...body]);
  const res = await domainurl.post("image/upload", {
    method: "POST",
    body,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });

  console.log(res.data);
  // const imageData = await response.json();

  // return imageData;
}