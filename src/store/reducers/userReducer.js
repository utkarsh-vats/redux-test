import { FETCH_USERS } from "../constants";

const userReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case FETCH_USERS:
            return {name: payload};
        default:
            return state;
    }
};

export default userReducer;