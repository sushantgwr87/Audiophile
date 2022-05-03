import domainurl from "../domainAPI";

export async function imageUpload(image) {
  const formData = new FormData();
  console.log(image);

  formData.append('productImage', image);
  console.table([...formData]);
  
  const res = await domainurl.post("image/upload", formData);

  console.log(res.data)

  return res.data;
}

export async function productUpload(formData) {

  console.log(formData);
  const body = JSON.stringify(formData)
  console.log(body);
  
  const res = await domainurl.post("product/add",body);

  console.log(res.data)
  // const imageData = res.json();

  // return imageData;
}