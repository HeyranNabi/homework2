export const apiUrl = "https://jsonplaceholder.typicode.com";


export const getData = async (url) => {

    return new Promise(async (resolve, reject) => {
 
        try {
            const response = await fetch(url);
            const posts = await response.json();
            resolve(posts); 
        } catch (e) {
            reject(e);
        }
    })

}