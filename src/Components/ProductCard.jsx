import React from 'react';

import './ProductCard.css'
function ProductCard({Name,Category,Image,Price}) {
    return (
        <div className='product_card'>
            <div className='product_img_div'>
                <img src={Image} alt="1" />
            </div>
            <div className='product_info_div'>
                <p className='product_brand'>Maybelline</p>
                <p className='product_name'>{Name}</p>
                <p className='product_price'>{Price} &nbsp;<span className='product_mrp'>₹999</span></p>
                <button className='addtocart_btn'>Add to cart</button>
            </div>
        </div>
    );
}

export default ProductCard;