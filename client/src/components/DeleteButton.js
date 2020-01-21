import React from 'react';

function DeleteButton(props) {
    return (
        <button onClick={props.handleDelete}>
            Delete completed
        </button>
    );
}

export default DeleteButton;