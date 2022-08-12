const NewTutorCalendar = () => {
  return (
    <>
      <style>{`
        #new-tutor-calendar-section p {
            font-family: 'Work Sans', sans-serif;
            color: #808080;
            font-weight: 500;
        }
        .add-course-container {
            border-radius: 20px;
            box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        }
        .btn-new-tutor-calendar {
            border: 1px solid rgba(0,0,0,0.15);
            border-radius: 10px;
            font-family: 'Work Sans', sans-serif;
            color: var(--dark-blue);
            font-weight: 500;
        }
        .temp-cal {
            height: 300px;
            border: 1px solid var(--dark-blue);
        }
      `}</style>
      <section id="new-tutor-calendar-section" className="container-fluid py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="col col-lg-7">
            <h2 className="">Course calendar</h2>
            <div className="temp-cal d-flex align-items-center justify-content-center my-5 w-100 me-lg-5 text-center">
              <p className="h3">Calendly API will be used here for calendar</p>
            </div>
          </div>
          <div className="col col-lg-5 ms-lg-5">
            <div className="d-flex flex-column flex-lg-row my-5">
              <div className="btn btn-new-tutor-calendar mx-lg-5 my-2 ms-lg-0">
                July 3, 2022
              </div>
              <div className="btn btn-new-tutor-calendar mx-lg-5 my-2">
                9:30 am
              </div>
            </div>
            <div className="add-course-container container text-center p-5">
              <p className="account-heading fw-bold">No class on this date</p>
              <button className="btn btn-new-course btn-lg fw-bold h5">
                + Add new course
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewTutorCalendar;
