import React from 'react'
//the following snippet has been borrowed (or based upon) from week 3 course material for cosc2758/2938 semester 1, 2024.

const USERS_KEY = "users";
const USER_KEY = "user";

const getUser = () => {
    return localStorage.getItem(USER_KEY);
}
const getData = (key) => {
    let items = localStorage.getItem((key))
    return JSON.parse(items)
}
export {getUser,getData}