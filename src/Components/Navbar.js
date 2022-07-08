import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import logo from "../images/logo.webp";
const Navbar = () => {
  console.log("navbar rendered");

  return (
    <>
      <style>{`
      * {
        {/* border: 1px solid red; */}
      }
        nav {
            font-family: 'Work Sans', sans-serif;
            z-index: 100;
        }

        .nav-link {
            color: var(--dark-blue);
            font-size: 20px;          
        }

        .navbar-toggler:focus {
          border-width: 2px;
        }

        {/* .active {
            font-weight: bold;
            transform: translateY(-4px);
            text-decoration: dashed underline;
            text-decoration-color: var(--active-link);
            text-underline-offset: 6px;
        }         */}

        .btn-nav {
            border: 1px solid var(--dark-blue);
            color: var(--dark-blue);
            width: 96px;
            height: 36px;
            font-family: 'Ubuntu', san-serif;
            font-weight: medium;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;            
        }
        .btn-lang {
            display: flex;
            align-items: center;
            font-family: 'Work Sans', sans-serif;
            color: #6b7280; 
        }
        #nav-login-arrow {
            transform: rotate(-90deg);
        }
        .join {
            background: var(--dark-blue);
            color: white;
        }

        .nav-btn-container {
          display: flex;
          align-items: center;
        }
        
        #login-mobile {
          display: none;
        }
        #home-logo {
          width: 50%;
          height: 50%;
        }

        @media (max-width: 1024px) {
          #home-logo {
            width: 100%;
            height: 100%;
          }
          #login-mobile {
            display: flex;
          }
          .login {
            display: none;
          }
          #lang-btn-list-item {
            position: absolute;            
            left: 0;
            right: 0;
            margin: 1rem auto;

          }
          .nav-item:first-of-type {
            padding-top: 5rem;
          }
        }
    `}</style>
      <header className="contianer-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top w-100">
          <div className="container mt-2 mx-auto px-0">
            <div className="d-flex align-items-center justify-content-between container-fluid">
              <Link className="navbar-brand" to="/">
                <img
                  id="home-logo"
                  src={logo}
                  alt="Tlancer"
                  width={"374"}
                  height={"90"}
                />
              </Link>
              <button
                id="login-mobile"
                className="btn btn-nav btn-lg ms-auto me-3 fw-bold text-nowrap"
              >
                login
                <svg
                  id="nav-login-arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down ms-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </button>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/">Student</CustomLink>
                <CustomLink to="/">Tutor</CustomLink>
                <CustomLink to="/">Mission</CustomLink>
                <CustomLink to="/">Why us?</CustomLink>
                <CustomLink to="/">Reviews</CustomLink>
                <li className="nav-btn-container">
                  <Link
                    to="/registration"
                    className="btn btn-nav btn-lg join mx-auto ms-lg-4"
                  >
                    Join
                  </Link>
                </li>

                <li className="nav-btn-container">
                  <Link
                    to="/"
                    className="btn btn-nav btn-lg login mx-auto ms-lg-4"
                  >
                    login
                    <svg
                      id="nav-login-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-down ms-2"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                      />
                    </svg>
                  </Link>
                </li>
                <li id="lang-btn-list-item">
                  <button className="btn btn-lang btn-lg mx-auto ms-lg-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-globe me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                    </svg>
                    Eng
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
