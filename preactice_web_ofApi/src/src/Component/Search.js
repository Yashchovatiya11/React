import React from 'react';
import '../Component/Index.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import ReactDOM from "react-dom/client";
import {Link} from "react-router-dom";


const Search = () => {


     const [val, setval] = useState([]);
     
     useEffect(() => {
                    axios.get(`https://dummyjson.com/products/search?q=${value}`)
                         .then(function (response) {
                              // handle success
                              console.log(response.data.products);
                              setval(response.data.products);
                         })
                         .catch(function (error) {
                              // handle error
                              console.log(error);
                         })
               }, [])

     return (
          <div>
              
       

               return (
               <div className="App">

                    <div className='row'>
                         {
                              val.map((item, ind) => {
                                   return (
                                        <>
                                             <div className="col-3" style={{ maxWidth: "20rem" }}>
                                                  <Link className='link' to={`/Products/${item.id}`}>
                                                       <div className="card">
                                                            <img src={item.thumbnail} className="card-img-top" alt="..."></img>
                                                            <div className="card-body">
                                                                 <h5 className="card-title">{item.title}</h5>
                                                                 <p className="card-text">{item.description}</p>
                                                                 <div className='d-flex fw-bold'>
                                                                      <p> PRICE : </p>
                                                                      <div className='d-flex'>
                                                                           <span>&#8377; {item.price} </span><span className='ps-4'>({item.discountPercentage} %) <span className='text-danger'>off</span> </span>
                                                                      </div>

                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </Link>
                                             </div>

                                        </>
                                   )
                              })
                         }
                    </div>



               </div >
               );
}

               export default Index;
          </div>
     )
}

export default Search;
