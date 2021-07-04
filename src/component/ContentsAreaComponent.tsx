import React from 'react';
import ContentComponent from './ContentComponent';
import '../style/ContentsAreaComponent.scss';
import '/Users/leebohyuk/Desktop/my_project2/src/component/20200412_214041.jpg';

interface imgInfo {
    img: string;
    date: number;
    name: string;
    site: string;
    size: number;
}

const ContentsAreaComponent = () => {

    const imgInfo: imgInfo[] = [{
        img: '/img/이보혁52200412영산강.jpg',
        date: 200412,
        name: '이보혁',
        site: '영산강',
        size: 52
    },
    {
        img: '/img/이시도53210620전라도.jpeg',
        date: 210620,
        name: '이시도',
        site: '전라도',
        size: 53
    },
    {
        img: '/img/이시도56200614용설저수지.jpeg',
        date: 200614,
        name: '이시도',
        site: '용설저수지',
        size: 56
    }
    ]

    return (
        <div className="a-area"
            style={{
            }}>
            {imgInfo.map(a =>
                <ContentComponent img={a.img} date={a.date} name={a.name} site={a.site} size={a.size}></ContentComponent>
            )}
        </div>
    );
};

export default ContentsAreaComponent;