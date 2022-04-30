export default async function getProducts() {
    const response = await fetch(`http://localhost:5000/product/`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }

    const productData = await response.json();

    console.log(productData);
}