import React from 'react';
import PageHeading from "../Components/PageHeading"
import ProductSortFilter from '../Components/ProductSortFilter';
import ProductCard from '../Components/ProductCard';
import './Products.css'


function Products(props) {
//    let [CategoryName,SetCategoryName] = useState("Our Products")

    return (
        <div>
           <PageHeading heading="Our Products" />
            <ProductSortFilter />
            <div className='product_cards_parent'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    );
}

export default Products;