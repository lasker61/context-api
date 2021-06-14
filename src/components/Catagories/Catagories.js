import React from 'react';
import CatagoriesDetail from '../CatagoriesDetail/CatagoriesDetail';

const Catagories = (props) => {
    const {count} =props
    return (
        <div>
            <h4>select catagory</h4>
            <CatagoriesDetail count={count}></CatagoriesDetail>
        </div>
    );
};

export default Catagories;