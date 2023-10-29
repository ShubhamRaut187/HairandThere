import React from 'react';

import './ProductCard.css'
function ProductCard(props) {
    return (
        <div className='product_card'>
            <div className='product_img_div'>
                <img src="https://www.maybelline.co.in/-/media/project/loreal/brand-sites/mny/apac/in/products/face/foundation/superstay-foundation/module/product-info/classic-ivory/120-classic-ivory-1.jpg?rev=104841d32e324f00a042267687b85264&cx=0.47&cy=0.38&cw=315&ch=472&hash=D848624B7B9300A66C63F0624B11BFE5" alt="1" />
            </div>
            <div className='product_info_div'>
                <p className='product_brand'>Maybelline</p>
                <p className='product_name'>TIGI Bed Head Recovery Moisture Rush Hair Conditioner For Dry & Damaged Hair (600ml)</p>
                <p className='product_price'>₹599 &nbsp;<span className='product_mrp'>₹999</span></p>
                <button className='addtocart_btn'>Add to cart</button>
            </div>
        </div>
    );
}

export default ProductCard;