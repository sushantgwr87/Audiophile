export async function imageUpload({image}) {
    const body = new FormData();
    body.append("image", image);

    const response = await fetch("/api/upload", {
      method: "POST",
      body
    });
    const imageData = await response.json();

    return imageData;
}