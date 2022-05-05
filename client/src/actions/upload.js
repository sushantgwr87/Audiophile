import domainurl from "../domainAPI";
import { toast } from "react-toastify";

export async function imageUpload(image) {
  const formData = new FormData();
  console.log(image);

  formData.append('productImage', image);
  console.table([...formData]);

  const res = await domainurl.post("image/upload", formData);

  console.log(res.data)

  if (res.data.message)
    toast.success("Image Uploaded Successfully");
  return res.data;
}

export async function productUpload(formData) {

  const body = JSON.stringify(formData)

  const res = await domainurl.post("product/add", body);

  if (res.data.status)
    toast.success("Product Data Uploaded Successfully");
}