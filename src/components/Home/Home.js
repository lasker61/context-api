import React from 'react';
import Catagories from '../Catagories/Catagories';

const Home = (props) => {
    const {count} =props
    return (
        <div style={{border:'1px solid purple'}}>
            <h3>This is home:{count}</h3>
            <Catagories count={count}></Catagories>
        </div>
    );
};

export default Home;