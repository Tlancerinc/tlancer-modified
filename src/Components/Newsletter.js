const Newsletter = () => {
  return (
    <>
      <style>{`
        #newsletter-section h2 {
            font-family: 'Ubuntu', san-serif;
            color: #00274c;            
        } 
        #newsletter-section p {
            font-family: 'Work Sans', sans-serif;
            color: #6b7280;
        } 
        #newsletter-signup-container {
            border: 1px solid #d1d5db;
            border-radius: 40px;
            font-family: 'Work Sans', sans-serif;
        }
        #newsletter-signup-input {
            border: none;
        }
        #newsletter-signup-input:focus {
            outline: none;
        }
        #newsletter-signup-btn {
            background: #00274C;
            color: #fff;
            font-family: 'Ubuntu', san-serif;
            border-radius: 33px;
        }
        .privacy {
            font-size: .8rem;
        }
        .privacy-link {
            color: #6b7280;
        }
        .privacy-link:hover {
            color: #6b7280;
            opacity: .7;
        }        
      `}</style>
      <section id="newsletter-section" className="container-fluid">
        <div className="container d-flex flex-column flex-md-row align-items-center">
          <div className="col col-md-8">
            <h2 className="fw-bold mb-4">Sign up for our newsletter</h2>
            <p>
              Be the first to know about releases and industry news and
              insights.
            </p>
          </div>
          <div className="col col-md-4">
            <div
              id="newsletter-signup-container"
              className="py-3 px-4 d-flex justify-content-between"
            >
              <input
                id="newsletter-signup-input"
                placeholder="Enter your email"
                type={"text"}
              />
              <button
                id="newsletter-signup-btn"
                className="fw-medium px-3 py-1"
              >
                Send
              </button>
            </div>
            <p className="privacy mt-2 ms-4">
              We care about your data in our
              <a className="privacy-link" href="/">
                {" "}
                privacy policy
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Newsletter;
