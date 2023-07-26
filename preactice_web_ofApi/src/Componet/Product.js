import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './Product.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(function (response) {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const handleClick = () => {
  //   axios
  //     .get('https://dummyjson.com/products/')
  //     .then(function (response) {
  //       setProducts(response.data.products);
  //       console.log(response.data.products);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <div className="main-box1">
        {products.map((product, index) => (
          <div className="box1" key={index}>
            <Link to={`/Productsingal/${product.id}`} className='text-decoration-none'>
              <div className="box-items1">
                <div className="box-image1">
                  <img src={product.thumbnail} alt="" />
                </div>
                <div className="box-items1">
                  <h2>{product.title}</h2>
                  {/* <div className="description">{product.description}</div> */}
                  <span className="price">${product.price}</span>
                  <span className="discount">{product.discountPercentage}</span>
                  <div>
                    <span className="stars">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar />
                    </span>
                    <span className="rating">{product.rating}</span> <br />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;