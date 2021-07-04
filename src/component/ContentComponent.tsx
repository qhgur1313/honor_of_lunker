import React from 'react';

interface imgInfo {
    img: string;
    date: number;
    name: string;
    site: string;
    size: number;
}

const ContentComponent = (props: imgInfo) => {

    const { img, date, name, site, size } = props;

    return (
        <div style={{
            display: 'flex',
            width: '160px',
            height: '240px',
            flexDirection: 'column',
        }}>
            <img
                src={process.env.PUBLIC_URL + `${img}`}
                style={{
                    width: '140px',
                    height: '160px',
                }}
                alt={img}></img>
            <div
                style={{
                    marginBottom: 'auto'
                }}>
                <div> 날짜 : {date}</div>
                <div> 앵글러 : {name}</div>
                <div> 위치 : {site}</div>
                <div> 크기 : {size}cm</div>
            </div>
        </div>
    );
};

export default ContentComponent;