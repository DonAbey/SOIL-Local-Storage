import React from 'react'
//the following snippet has been borrowed (or based upon) from week 3 course material for cosc2758/2938 semester 1, 2024.

const USERS_KEY = "users";
const USER_KEY = "activeUser";

const getUser = () => {
    const local = localStorage.getItem(USER_KEY);
    return JSON.parse(local)
}
const getData = (key) => {
    let items = localStorage.getItem((key))
    return JSON.parse(items)
}
export {getUser,getData}