
export type Router = {
    router : string,
    name : string,
    method : string
}

const backEndRouters : Router[] = [
    {
        router: "/login",
        name: "login",
        method: "POST_FORM_ENCODED"
    },


    {
        router: "/produtos/produto_id/",
        name: "getProduct",
        method: "GET"
    },
    {
        router: "/produtos",
        name: "listProduct",
        method: "GET"
    },
    {
        router: "/produtos/adicionar",
        name: "postProduct",
        method: "POST"
    },
    {
        router: "/produtos/atualizar_by_id/",
        name: "updateProduct",
        method: "PUT"
    },
    {
        router: "/produtos/delete_by_id/",
        name: "deleteProduct",
        method: "DELETE"
    },


    {
        router: "/usuarios",
        name: "listUsers",
        method: "GET",
    },
    {
        router: "/usuarios/get_by_id/",
        name: "getUser",
        method: "GET",
    },
    {
        router: "/usuarios/adicionar",
        name: "createUser",
        method: "POST",
    },
    {
        router: "/usuarios/atualizar_by_id/",
        name: "updateUser",
        method: "PUT",
    },
    {
        router: "/users/delete_by_id/",
        name: "deleteUser",
        method: "DELETE",
    },
]

export async function findRouter(router : string) {
    const resultSearch = {...[...backEndRouters].find(r => r.name === router)};

    return resultSearch;
}