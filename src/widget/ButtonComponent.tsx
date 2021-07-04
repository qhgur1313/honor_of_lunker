import React from 'react';
import '../style/ButtonComponent.scss';

interface Props {
    input: string;
}

const ButtonComponent = (props: Props) => {
    const { input } = props;

    return (
        <button className='w-button'> {input} </button>
    );
};

export default ButtonComponent;