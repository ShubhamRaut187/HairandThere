import React from 'react';

import './ProductSortFilter.css'
function ProductSortFilter(props) {
    return (
        <div className='filter_sort_main'>
            <div className='filter_div'>
                <p>Filter By :</p>
                <select className='filter_select'>
                    <option value="">Categories</option>
                    <option value="">Lipsstick</option>
                    <option value="">Nail</option>
                    <option value="">Serum</option>
                    <option value="">Face Wash</option>
                </select>
            </div>
            <div className='sort_div'>
                <p>Sort By :</p>
                <select className='sort_select'>
                    <option value="">Range</option>
                    <option value="">Price Low to High</option>
                    <option value="">Price High to Low</option>
                </select>
            </div>
        </div>
    );
}

export default ProductSortFilter;