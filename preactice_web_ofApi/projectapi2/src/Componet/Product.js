import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './Product.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
// import bootstrap from 'bootstrap';

const Product = () => {
  const [products, setProducts] = useState([]);
  // const bsOffcanvas = new bootstrap.Offcanvas('#myOffcanvas')
  // const [search, setsearch] = useState([]);

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

  
  function Searchdata(a) {
    const data = a.target.value;

    // useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${data}`)
      .then(function (response) {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
    // }, []);

      
    // const offcanvasElementList = document.querySelectorAll('.offcanvas')
// const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
  }

  function Catdata() {
    // const item = v.target.value;
    
    axios
      .get('https://dummyjson.com/products/categories')
      .then(response => {
        setProducts(response.data.products);
        console.log(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });

  }
  
  // const searchClick = () => {
  //   seyIsSearchVisible(true);
  // };
  
  return (

    <div>
    
    <Row className='pt-4 pb-4'>
      <Col xl={2}><input type="button"  onClick={Catdata} /></Col>  
      <Col xl={2}></Col>  
      <Col xl={2}></Col>  
      <Col xl={2}></Col>  
      <Col xl={2}></Col>  
      <Col xl={2}></Col>  
    </Row>

      {
        products.map((v, ind) => {
          return (
            <h4 key={ind}>{v}</h4>
          ) 
        })
      }

      Search : <input type="text" onChange={Searchdata} id='' />

      <div className="main-box1">
        {products.map((product, index) => (
          <div className="box1" key={index}>
            <Link to={`/products/${product.id}`} className='text-decoration-none'>
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