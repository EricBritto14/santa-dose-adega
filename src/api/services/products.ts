import { Product } from '@Models/product';
import { selectMethod } from '@Api/methods';
import { findRouter }  from '@Api/mapRouters';

export async function createProduct({ product } : { product : Product }) {
    let request = await findRouter("postProduct");

    return selectMethod(
        request.router,
        request.method,
        product
    );
}

export async function listProducts() {
    let request = await findRouter("listProduct");

    return selectMethod(
        request.router,
        request.method,
    );
}

export async function getProduct(id : number) {
    let request = await findRouter("getProduct");
    let url : string = `${request.router}${id}`

    return selectMethod(
        url,
        request.method,
    );
}

export async function updateProduct(id : number, product : Product) {
    let request = await findRouter("updateProduct");
    let url : string = `${request.router}${id}`

    return selectMethod(
        url,
        request.method,
        product
    );
}

export async function deleteProduct(id : number) {
    let request = await findRouter("deleteProduct");
    let url : string = `${request.router}${id}`

    return selectMethod(
        url,
        request.method,
    );
}