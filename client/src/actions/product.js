import domainurl from "../domainAPI";

// export async function getCategoryProducts(category) {
//     const res = await domainurl.get(`product/`, { params: { category } });

//     const productData = res.data;

//     console.log(productData);
// }

export async function getFeaturedProducts() {
    console.log("called");
   try {
    const res = await domainurl.get(`product/featured`);

    const productData = res.data;

    console.log(productData);
   }
   catch(error) {
       console.log(error);
   }
}

export async function getProduct(id) {
    const res = await domainurl.get(`product/`, { params: { id } });

    const productData = res.data;

    console.log(productData);
}