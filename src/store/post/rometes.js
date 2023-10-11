/**
 * 
 * Third party Api's 
 * 
 */


import axios from "axios";


async function getPostList() {
    return await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data).catch(error => error);
}

async function getPostDetails(id) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.data).catch(error => error);
}


export {
    getPostList,
    getPostDetails
}