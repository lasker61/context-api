import React, { useState } from 'react';

const Header = (props) => {
    const {count,setCount}= props
    return (
        <div>
         <h3>this is Header: {count}</h3>
         <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    );
};

export default Header;