import React,{useState, useEffect} from 'react';
import charmDown from "../../images/courses/chevron-down.png";

const CourseEnrollmentSelfService = (props) => {
  return (
    <>
      <style>{`
    
    #self-serve-text-container {
        font-family: 'Ubuntu', san-serif;
        
        border-left: 1px solid #808080;
    }
    .text-style{
        font-family: 'Ubuntu', san-serif;
        font-weight: medium;
        color: var(--dark-blue);
    }
    .heading-container{
      font-family: 'Ubuntu', san-serif;
      color : #808080
    }

    .label-container{
      margin-left:200px;
    }
    .text-color-container{
      color:#808080;
    }
    .dropdown-container{
      background-color:white;
      width:350px;
      text-align:left;
      
    }
    .border-container{
      border:1px solid;
    }
    .dist-container{
      margin-left:20px;
    }
    .dist-from-div{
      margin-left:300px;
    }
    .chevDown-container{
      margin-left:200px;
    }
    .test-button-conatiner{
      
      background-color:green;
    }
    .button-container{
      width: 250px;
      height: 45px;
      text-align:left;
      padding-left:6px;
    }
    .arrow-container{
      margin-left:160px;
    }
   
    `}</style>
      <section id="parent-section" className="container-fluid p-5">
        

        <div className="container">
          <h2 className="fw-bold h2 heading-container text-style">
            Course enrollment
          </h2>
       
          <div id="self-serve-text-container"className="conatiner d-flex ">
            <div  className="flex-column dist-container">

            

              <div className="my-5 text-style">
              <h2>
                Enrollment
              </h2>
            </div>

            <div className="my-5 heading-container">
              <h2>
                Book Date
              </h2>
            </div>

            <div className="my-5 heading-container">
              <h2>
                Payment
              </h2>
            </div>

          </div>
          <div className="dist-from-div">

            <p className="heading-container">Select Class Type</p>
            <div class="dropdown mb-5 ">
              <a class="btn  dropdown-container text-color-container border-container" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Online class  
                <img
                  className=" chevDown-container"
                  src={charmDown}
                  alt="Tlancer"
                  width={"20"}
                  height={"20"}
                  
                />
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item dropdown-container" href="#">Action</a></li>
                <li><a class="dropdown-item dropdown-container" href="#">Another action</a></li>
                <li><a class="dropdown-item dropdown-container" href="#">Something else here</a></li>
              </ul>
            </div>


            <p className="heading-container">Course Type</p>
            <div class="dropdown mb-5 ">
              <a class="btn  dropdown-container text-color-container border-container heading-container" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Grouped 
                <img
                  className=" chevDown-container"
                  src={charmDown}
                  alt="Tlancer"
                  width={"20"}
                  height={"20"}
                  
                />
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item dropdown-container heading-container" href="#">Action</a></li>
                <li><a class="dropdown-item dropdown-container heading-container" href="#">Another action</a></li>
                <li><a class="dropdown-item dropdown-container heading-container" href="#">Something else here</a></li>
              </ul>
            </div>

            <button  className="btn-registration btn btn-lg button-container text-left">
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-down ms-5"
                    viewBox="0 0 16 16"
                    className="arrow-container"
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                </button>


          </div>


          </div>

          
          

      </div>
      </section>
    </>
  );
};

export default CourseEnrollmentSelfService;
