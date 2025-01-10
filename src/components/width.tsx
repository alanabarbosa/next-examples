'use client';
import React from 'react';

export default function Width() {
    const [width, setWidth] = React.useState(0);
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(document.documentElement.clientWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return <>
        <div style={{ background: width <= 500 ? "rgb(153, 57, 172)"
            : " #395EAC", padding: '10px 50px'}}>
            <h2 style={{ color: active ? '#680' : '#b00'}}>
                Width screen: {width}
            </h2>
            {width <= 500 ? <span>Is mobile</span> : <span>Is not mobile</span>}
            <button onClick={() => setActive(b => !b)}>Click here</button>
        </div>
    </>
}