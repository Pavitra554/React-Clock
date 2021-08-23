import '../Style/Nav.css';
import { Link } from 'react-router-dom';
import { BiTime } from "react-icons/bi";
import { BiTimer } from "react-icons/bi";

const Nav = () => {
    return ( 
        <div className="nav">
            <div className = "Time">
                <Link className="tlink" to="/India">
                    <button>
                    <BiTime color="#ffffff" size='2.5rem'/>
                    <div>Clock</div>
                    </button >
                </Link>

                <Link className="timerlink" to="Timer">
                    <button>
                    <BiTimer color="#ffffff" size='2.5rem'/>
                    <div>Stop Watch</div>
                    </button >
                </Link>
            </div>
        </div>
     );
}
 
export default Nav;