import React from "react";

const Card = ({ avatar, first_name, last_name, email }) => {
    return(
        <div>
            <img src={avatar} alt="img" />
            <h1>{first_name + " " + last_name}</h1>
            <p>{email}</p>
        </div>
    );
}

export default Card;