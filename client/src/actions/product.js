import domainurl from "../domainAPI";

export async function getCategoryProducts(category) {
    try {
        const res = await domainurl.get(`${category}/products`);
        console.log(res.data)
        if (res.data.status)
            sessionStorage.setItem(`${category}Products`, JSON.stringify(res.data.data));
    }
    catch (error) {
        console.log(error);
    }

}

export async function getFeaturedProducts() {
    try {
        const res = await domainurl.get(`/featured`);
        console.log(res.data)
        sessionStorage.setItem("featuredProducts", JSON.stringify(res.data.data));
    }
    catch (error) {
        console.log(error);
    }
}

export async function getProduct(id) {
    const res = await domainurl.get(`product/${id}`);

    sessionStorage.setItem("fetchedProduct", JSON.stringify(res.data.data));
    const productData = res.data;

    console.log(productData);
}