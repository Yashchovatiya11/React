import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import User from './Component/User';
import Layout from './Component/Layout';
import Userpersonal from './Component/Userpersonal';

function App() {
  
  // axios.get('/user?ID=12345')
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   });
  
  

  return (
    <div className="App">
       <Routes>
        <Route>
          <Route index  path="/" element={<Layout />}/>
          <Route  path='/user' element={<User />} />
          <Route path="/user/:id/:name" element={<Userpersonal />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
