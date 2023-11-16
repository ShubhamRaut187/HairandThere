import React from 'react';
import PageHeading from "../Components/PageHeading"
import ProductSortFilter from '../Components/ProductSortFilter';
import ProductCard from '../Components/ProductCard';
import './Products.css'
import { useState,useEffect } from 'react';

function Products(props) {
//    let [CategoryName,SetCategoryName] = useState("Our Products")
let [Products,SetProducts] = useState([]);
console.log(Products);
let getData=()=>{
    fetch(`https://fakestoreapi.com/products`).then((response)=>{
        return response.json();
    }).then((response)=>{
        SetProducts(response);
    }).catch((error)=>{
        console.log(error);
    });
}
useEffect(()=>{
    getData();
},[])
    return (
        <div>
           <PageHeading heading="Our Products" />
            <ProductSortFilter />
            <div className='product_cards_parent'>
                {
                    Products.map((element,index)=>{
                        return  <ProductCard key={index} Name={element.title} Category={element.category} Image={element.image} Price={element.price}/>
                    })
                }
               
            </div>
        </div>
    );
}

export default Products;