import { Link } from "react-router-dom";
import logo from "../../images/logo.webp";
import cross_btn_sign from "../../images/courses/cross_sign.png";
const CourseEnrollmentHeader = () => {
  console.log("navbar rendered");

  return (
    <>
      <style>{`

        

        #nav-logo {
            text-decoration: none;
        }
      
        header {
          overflow-x: hidden;
        }

        nav {
            font-family: 'Work Sans', sans-serif;
            z-index: 100;
        }

        .nav-link {
            color: var(--dark-blue);
            font-size: 20px;          
        }
        
    `}</style>
      <header className="contianer-fluid">
        <nav className="navbar px-3 navbar-expand-lg navbar-light bg-white fixed-top w-100">
          <div className="container mt-2 mx-auto px-0">
            <div className="d-flex flex-row-reverse align-items-center w-100">
              <Link className="me-lg-auto" id="cross-btn" to="/student">
                <img
                  className="ms-5"
                  src={cross_btn_sign}
                  alt="Tlancer"
                  width={"20"}
                  height={"20"}
                />
                
                </Link>
            </div>

            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
                
                  <Link className="me-lg-auto" id="nav-logo" to="/student">
                <img
                  className="home-logo p-1"
                  src={logo}
                  alt="Tlancer"
                  width={"374"}
                  height={"90"}
                />
                
              </Link>
              </ul>
  
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default CourseEnrollmentHeader;
