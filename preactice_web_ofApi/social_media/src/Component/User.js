import axios from "axios";
import '../Component/User.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Userpersonal from "./Userpersonal";
import * as all from "react-bootstrap";

function User() {

     const [user, setuser] = useState([]);

     useEffect(() => {
          axios
               .get('https://jsonplaceholder.typicode.com/users')
               .then(function (response) {
                    // handle success
                    setuser(response.data);
                    console.log(response.data);
               })
               .catch(function (error) {
                    // handle error
                    console.log(error);
               });

     }, []);

     return (
          <>



               <div className="user">
                    <all.Container className="pt-5">
                         <div className="user-row">
                              <all.Row>
                                   {user.map((info, index) => (
                                        <all.Col xl={6} className="profile-main" xs="12" md="6" lg="4" key={index}>
                                             <Link to={`/user/${info.id}/${info.name}`} className="text-decoration-none">
                                                  <div className="profile mx-auto">
                                                       <div className="profile-images ">
                                                            <img src={require(`../Component/image/0${index + 1}.jpg`)} alt="" />
                                                       </div>
                                                       <div className="profile-details pt-3">
                                                            <h5 className="username">{info.name}</h5>
                                                            <p className="user-info">@{info.username}</p>
                                                       </div>
                                                  </div>
                                             </Link>
                                        </all.Col>
                                   ))}
                              </all.Row>
                         </div>
                    </all.Container>
               </div>

          </>
     );
}

export default User;