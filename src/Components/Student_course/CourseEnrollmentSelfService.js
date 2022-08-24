import {useState} from 'react';
import charmDown from "../../images/courses/chevron-down.png";

const CourseEnrollmentSelfService = (props) => {
  const [entry, setEntry] = useState("");
  const [courseEntry, setCourseEntry] = useState("");
  
  console.log("entry: " + entry);
  console.log("courseEntry: " + courseEntry);
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
    .top-margin-container{
      margin-top:130px;
    }
    
   
    `}</style>
      <section id="parent-section" className="container-fluid p-5  mb-5 top-margin-container">
        

        <div className="container  mt-5 mb-5">
          <h2 className="fw-bold h2 heading-container text-style  mb-5">
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
            <div class="dropdown mb-4 ">
              
              <form>
              <select
                onChange={(e) => {
                  setEntry(e.target.value);
                }}
                id="class-type"
                defaultValue={"DEFAULT"}
                className="form-select  my-4"
              >
                <option value="DEFAULT" disabled className="my-4">
                  Select Class Type
                </option>
                <option value="online class" className="my-4">
                  Online Class
                </option>
                
                
              </select>             
            </form>

            </div>


            <p className="heading-container">Course Type</p>
            <div class="dropdown mb-5 ">
              <form>
              <select
                onChange={(e) => {
                  setCourseEntry(e.target.value);
                }}
                id="course-type"
                defaultValue={"DEFAULT"}
                className="form-select  my-4"
              >
                <option value="DEFAULT" disabled className="my-4">
                  Select Course Type
                </option>
                <option value="grouped" className="my-4">
                  Grouped
                </option>
                
                
              </select>

              
            </form>
            
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
