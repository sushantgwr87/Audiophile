import domainurl from "../domainAPI";

export async function getCategoryProducts(category) {
    try {
        const res = await domainurl.get(`${category}/products`);
        if (res.data.status)
            return res.data.data;
    }
    catch (error) {
        console.log(error);
    }

}

export async function getFeaturedProducts() {
    try {
        const res = await domainurl.get(`/featured`);
        if (res.data.status)
            return res.data.data;
    }
    catch (error) {
        console.log(error);
    }
}

export async function getProduct(id) {
    try {
        const res = await domainurl.get(`product/${id}`);
        if (res.data.status)
            return res.data.data;
    }
    catch (error) {
        console.log(error);
    }
}