import React, { useContext } from 'react';
import {catagoryContext} from '../../App';



const CatagoriesDetail = (props) => { 
    const catagory =useContext(catagoryContext);
    const {count} =props
    return (
        <div>
            <h5>this is your catagories detail has :{count}</h5>
            <p>selected catagory:{catagory}</p>
        </div>
    );
};

export default CatagoriesDetail;