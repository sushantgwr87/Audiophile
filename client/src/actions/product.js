export async function getCategoryProducts(category) {
    const response = await fetch(`http://localhost:5000/products/`, { params: { category } });

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const productData = await response.json();

    console.log(productData);
}

export async function getProduct(category, id) {
    const response = await fetch(`http://localhost:5000/products`, { params: { category, id } });

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const productData = await response.json();

    console.log(productData);
}

export async function addProduct(category, id) {
    const response = await fetch(`http://localhost:5000/products`, { params: { category, id } });

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const productData = await response.json();

    console.log(productData);
}