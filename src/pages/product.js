// import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import getProduct from '../redux/operations';
import { useEffect } from 'react';

export const ProductCatalog = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.Product.products);

    useEffect(() => {
      dispatch(getProduct());
    }, []);
 
      return (
        <div>
        
            {product?.map((p) => {
              return (
                <div>{p.name}</div>
              )
            })}
        </div>
      );
    };