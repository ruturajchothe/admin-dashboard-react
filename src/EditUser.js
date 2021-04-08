import React from 'react';

const EditUser = (props) => {
    return (
        <>
            <h1>User: {props.match.params.id}</h1>
        </>
    );
}

export default EditUser;
