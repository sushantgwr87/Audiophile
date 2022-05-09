import domainurl from "../domainAPI";
import { toast } from "react-toastify";

export async function getCategoryProducts(category) {
    try {
        const res = await domainurl.get(`${category}/products`);
        if (res.data.status) {
            return { error: false, data: res.data.data };
        }
    }
    catch (error) {
        console.log(error);
        toast.error("Data fetch failed, Please refresh or try again later");
        return { error: true }
    }

}

export async function getFeaturedProducts() {
    try {
        const res = await domainurl.get(`/featured`);
        if (res.data.status) {
            return { error: false, data: res.data.data };
        }
    }
    catch (error) {
        console.log(error);
        toast.error("Data fetch failed, Please refresh or try again later");
        return { error: true }
    }
}

export async function getProduct(id) {
    try {
        const res = await domainurl.get(`product/${id}`);
        if (res.data.status) {
            return { error: false, data: res.data.data };
        }
    }
    catch (error) {
        console.log(error);
        toast.error("Data fetch failed, Please refresh or try again later");
        return { error: true }
    }
}