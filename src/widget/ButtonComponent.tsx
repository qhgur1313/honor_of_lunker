import React from 'react';

interface Props {
    input: string;
}

const ButtonComponent = (props: Props) => {
    const { input } = props;

    return (
        <button> {input} </button>
    );
};

export default ButtonComponent;