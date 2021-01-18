import { FETCH_USERS } from "../constants.js";

const url = `https://reqres.in/api/users?page=`;

const fetchUsers = async (dispatch) => {
    let id = Math.floor(Math.random() * 2) + 1;
    let fetchURL = `${url}${id}`;
    await fetch(fetchURL)
    .then(res => res.json())
    .then(res => dispatch({type: FETCH_USERS, payload: res.data}));
};

export default fetchUsers;