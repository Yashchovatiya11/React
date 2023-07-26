import { FaInstalod } from "react-icons/fa";
import { Link } from "react-router-dom";

function Layout() {
     return (
          <>
               <p>Welcome</p>
               <Link to="/User"> 
               <div>
                    <span className="fs-1 pt-5">
                         <FaInstalod></FaInstalod>
                    </span>
               </div>
               </Link>
          </>
     );
}

export default Layout;