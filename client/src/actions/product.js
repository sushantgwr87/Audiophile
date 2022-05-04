import domainurl from "../domainAPI";

export async function getCategoryProducts(category) {
    const response = await domainurl.get(`product/`, { params: { category } });

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const productData = await response.json();

    console.log(productData);
}

export async function getFeaturedProducts() {
    const response = await domainurl.get(`product/featured`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const productData = await response.json();

    console.log(productData);
}

export async function getProduct(id) {
    const response = await domainurl.get(`product/`, { params: { id } });

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const productData = await response.json();

    console.log(productData);
}