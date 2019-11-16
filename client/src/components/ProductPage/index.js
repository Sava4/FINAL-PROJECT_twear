import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

import ProductsGallery from '../common/ProductsGallery';
import AddToCartButton from '../common/buttons/AddToCart';


const topCats = [
    {name: 'clothes', _id: '901'},
    {name: 'footwear', _id: '902'},
    {name: 'accessories', _id: '903'},
    {name: 'looks', _id: '904'},
];

const categories = [
    {   _id: '11', name: 't-shirts', topCatId: '901'},
    {   _id: '21', name: 'dresses', topCatId: '901'},
    {   _id: '31', name: 'tops', topCatId: '901'},
    {   _id: '41', name: 'outwear & coats', topCatId: '901'},
    {   _id: '51', name: 'sweatshirt', topCatId: '901'},
    {   _id: '61', name: 'skirts', topCatId: '901'},
    {   _id: '71', name: 'shirts', topCatId: '901'},
    {   _id: '81', name: 'trowsers', topCatId: '901'},
    {   _id: '91', name: 'underwear', topCatId: '901'},
    {   _id: '12', name: 'shoes', topCatId: '902'},
    {   _id: '22', name: 'speed', topCatId: '902'},
    {   _id: '32', name: 'track', topCatId: '902'},
    {   _id: '42', name: 'pumps', topCatId: '902'},
    {   _id: '52', name: 'booties', topCatId: '902'},
    {   _id: '62', name: 'sneakers', topCatId: '902'},
    {   _id: '72', name: 'other footwear', topCatId: '902'},
    {   _id: '13', name: 'bags', topCatId: '903'},
    {   _id: '23', name: 'hats', topCatId: '903'},
    {   _id: '33', name: 'bracelets', topCatId: '903'},
    {   _id: '43', name: 'scarves', topCatId: '903'},
    {   _id: '53', name: 'umbrellas', topCatId: '903'},
    {   _id: '63', name: 'wallets', topCatId: '903'},
    {   _id: '73', name: 'other acessories', topCatId: '903'},
    {   _id: '14', name: 'hot look', topCatId: '904'},
    {   _id: '24', name: 'tea mood', topCatId: '904'},
    {   _id: '34', name: 'party hoc', topCatId: '904'},
    {   _id: '44', name: 'sporty girl', topCatId: '904'},
    {   _id: '54', name: 'slicky leaker', topCatId: '904'},
    {   _id: '64', name: 'bomb hacker', topCatId: '904'},
    {   _id: '74', name: 'romantics', topCatId: '904'},
];

const products = [
    {   _id: '1-10', name: 'blue jeans tile', categories: ['81']},
    {   _id: '1-20', name: 'great dress tile', categories: ['21']},
    {   _id: '1-30', name: 'xxl shirt tile', categories: ['71']},
    {   _id: '1-40', name: 'nice t-shirt tile', categories: ['71']},
    {   _id: '1-50', name: 'sexy bra tile', categories: ['91']},
    {   _id: '1-60', name: 'black jeans tile', categories: ['81']},
    {   _id: '1-70', name: 'mini black dress tile', categories: ['21']},
    {   _id: '1-80', name: 'wonderbra shirt tile', categories: ['71']},
    {   _id: '1-90', name: 'wow trousers t-shirt tile', categories: ['81']},
    {   _id: '1-100', name: 'unbelivable coat tile', categories: ['41']},
    {   _id: '1-110', name: 'rainy  coat tile', categories: ['41']},
    {   _id: '1-120', name: 'short top tile', categories: ['31']},
    {   _id: '2-10', name: 'high-heels shoes', categories: ['42']},
    {   _id: '2-20', name: 'sneakers sporty  shoes', categories: ['62']},
    {   _id: '2-30', name: 'fancy bootlets', categories: ['52']},
    {   _id: '2-40', name: 'party purse', categories: ['13']}
];


export default () => {

    const productName = useParams().product;
    const[productItem, setProductItem] = useState({name: '', _id: '', categories: [''] })
    const[categoryItem, setCategoryItem] = useState({name: '', _id: '', topCatId: '' })

    useEffect(() => {
        let item = products.filter(el => el.name === productName)[0];
        let catItem = categories.filter(el => el._id === item.categories[0])[0];
        setProductItem(item);
        setCategoryItem(catItem);
    },[productName]);
    console.log(categoryItem);

    return (
        <>
            <div className="row my-5 py-5">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="product-title">
                        <h2>{`${productItem.name.toUpperCase()}`}</h2>
                        <h3>{`art: ${productItem._id}`}</h3>
                    </div>
                    <div className="product description">
                        <p>{`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis pariatur, molestias provident perferendis, voluptatibus officia esse quas corporis ${productItem.name.toUpperCase()} or praesentium inventore maxime repudiandae ipsam asperiores minima sit aperiam`}</p>
                        <p>{`art: ${productItem._id}`}</p>
                        {/* <p>{`categories: ${productItem.categories.join(', ')}`}</p> */}
                    </div>
                    <div className="product-price">
                        <h3> 2500 uah</h3>
                    </div>
                    <AddToCartButton/>

                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <div className="images-gallery border">
                        <p> фотки </p>
                        <p> фотки </p>
                        <p> фотки </p>
                        <p> фотки </p>
                    </div>
                </div>
            </div>
            <div className="my-3 text-center">
                {/* <h2 > {`... More products in this category ${categoryItem.name]} ...`} </h2> */}
            </div>
            <div className="products-gallery">
                <div className="row">
                    <ProductsGallery topCats={topCats} categories={categories} products={products} categoryName={categoryItem.name}/>
                </div>
            </div>
            <div className="pagination-box">
                <div>THIS IS PAGINATION</div>
            </div>
        </>
    )
};
