
// import chevUp from "../../../images/Tutors/chevron-up.png";
// import chevUp from "../../images/Tutors/chevron-up.png"
 import charmDown from "../../images/courses/chevron-down.png";

const CourseEnrollmentSelfService = (props) => {
  return (
    <>
      <style>{`
    
    #self-serve-text-container {
        font-family: 'Ubuntu', san-serif;
        
        border-left: 1px solid #808080;
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
    .chevDown-container{
      margin-left:200px;
    }

   
    `}</style>
      <section id="parent-section" className="container-fluid p-5">
        <h2 className="fw-bold h2 heading-container">
                  Course enrollment
                  
                </h2>
      
      <div
        id="self-serve-container"
        className="container-fluid py-lg-5 p-lg-5"
      >

        <div className="container d-flex flex-column flex-md-row align-items-center my-5 p-lg-5">
          
          <div id="self-serve-text-container" className="container px-0 my-5">
            
            <div className="container p-lg-5">
              
              <div className="container d-flex align-items-center justify-content-center justify-content-lg-start px-0 mb-lg-5">
                <div>
                    <h2 className="fw-bold h2 ">
                      Course enrollment{" "}              
                    </h2>
                </div>
                <div className="mb-5 label-container">
                  <p className=" mb-2 text-color-container">
                        Select class type         
                  </p>
                  <div>
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

                  <p className=" mb-2 text-color-container">
                        Select class type         
                  </p>

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
                  
                </div>
                  
                </div>



 
                
              </div>


            <div>
              <div className="container d-flex align-items-center justify-content-center justify-content-lg-start px-0 mb-lg-5">
                <h2 className="fw-bold h2 ">
                  Course enrollment{" "}              
                </h2>
                
              </div>


            <div></div>
              
            </div>

              






            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default CourseEnrollmentSelfService;
