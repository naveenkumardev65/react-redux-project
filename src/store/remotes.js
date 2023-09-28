/**
 * 
 * Third party Api's 
 * 
 */


import axios from "axios";


async function getUserDetails() {
    return await axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data).catch(error => error);
}


export {
    getUserDetails
}