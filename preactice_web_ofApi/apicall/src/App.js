import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { Card, Col, Row } from 'react-bootstrap';

function App() {

  const [val, setval] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setval(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])


  return (
    <div className="App">

      <header>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand"><img className='logo' src={require("./photo/logo.6f08997.png")} alt="" /></a>
            <form className="d-flex" role="search">
              <ul className="navbar-nav d-flex">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
              </ul>
              <button className="btn btn-outline-warning w-50" type="submit">Support US</button>
            </form>
          </div>
        </nav>
      </header>

      <div>
        <div className='display-1 fw-bold text-center heading'>The Rick and Morty API</div>
      </div>


      <div className='content ps-4 pe-4 spacer'>
        <div className='row'>
          {
            val.map((item, ind) => {
              return (

                <>
                  <div className='col-6' key={ind}>
                    <div className='morty-mobs'>
                      <div className="card mb-3 border-2 border-dark  rounded shadow bg-body-tertiary rounded" >
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img src={item.image} className="img-fluid rounded-start h-100" alt="..."></img>
                          </div>
                          <div className="col-md-8 text-start">
                            <div className="card-body data">
                              <h5 className="card-title fw-bold h3 text-light">{item.name}</h5>
                              <div className='d-flex'>
                                <div><li className='status'></li></div>
                                <div><p className="card-text t-white">{item.status}-{item.species}</p></div>
                              </div><br />
                              <p className="card-text">
                                <div><small className="text-body"><p className='text'>Last known location : </p></small></div>
                                <div><p>{item.origin.name}</p></div>
                              </p>
                              <p className="card-text">
                                <small className="text-body">First seen in : </small>
                                <p>{item.location.name}</p>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </>
              )
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
