import { FETCH_USERS } from "../constants.js";

// const url = "https://reqres.in/api/users";
let id = 1;
const url = `https://reqres.in/api/users?page=${id}`;

const fetchUsers = async (dispatch) => {
    await fetch(url)
    .then(res => res.json())
    .then(res => dispatch({type: FETCH_USERS, payload: res.data}));
};

export default fetchUsers;