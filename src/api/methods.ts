import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://fastapi-adega.onrender.com",
});

export async function selectMethod(
    url : string | undefined, 
    method : string | undefined, 
    body? : any
) {
    const token = localStorage.getItem("token");

    if (url === undefined || method === undefined) return {
        error : true,
        response : { message: "url or method undefined" }
    };

    const config = {
        headers : {
            Authorization: "Bearer " + token
        }
    }

    const configMultipart = {
        headers : {
            Authorization: "Bearer " + token,
            "Content-Type" : "multipart/form-data"
        }
    }

    switch (method) {
        case "GET":
            const getResponse = await axiosInstance.get(url, config);
            return getResponse.data;

        case "POST":
            try {
                const postResponse = await axiosInstance.post(url, body, config);
                return { error: false, response: postResponse };
            } catch (error) {
                // const errorResponse = error.response.data;
                // return { error: true, response: postResponse };
                return { error: true, response: error };
            }

        case "PUT":
            const putResponse = axiosInstance.put(url, body, config);
            return putResponse;

        case "DELETE":
            const deleteResponse = axiosInstance.delete(url, config);
            return deleteResponse;

        case "MULTIPART_POST":
            try {
                const multipartPost = await axiosInstance.post(url, body, configMultipart);
                return { error: false, response: multipartPost };
            } catch (error) {
                // const errorMultipartPostResponse = error.response.data;
                // return { error: true, response: postResponse };
                return { error: true, response: error };
            }
    }
}