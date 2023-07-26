import '../Component/Index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";



function Index() {

     const [val, setval] = useState([]);

     useEffect(() => {
          axios.get('https://dummyjson.com/products')
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
     

     function searchdata(a) {
          const data = a.target.value;

          useEffect(() => {
               axios.get(`https://dummyjson.com/products/search?=${data}`)
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
          
     }
     // <h1>{item.title}</h1>
     // <img src={item.thumbnail} alt="" />
     // <p>{item.description}</p>
     
     return (
          <div className="App pt-4 pb-4">
               
               search : <input type="text" name="" onChange={searchdata} id="" />

               <div className='row pt-4'>
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