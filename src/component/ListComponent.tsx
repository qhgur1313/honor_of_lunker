import React from 'react';
import ButtonComponent from '../widget/ButtonComponent';
import '/style/ListComponent.scss';

const ListComponent = () => {
    let sortBehavior: string[] = ['시간순', '이름순', '크기순', '장소순']

    return (
        <div className='d-list'>
            {sortBehavior.map(i =>
                <ButtonComponent input={i}></ButtonComponent>
            )}

        </div>
    );


};

export default ListComponent;