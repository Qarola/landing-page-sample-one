import React from "react";
import { MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

 
const SectionForm = () => {
  return (
    <>
      <main className="mt-5">
        <div className="container">
          <section class="mb-5">
            <h4 className="mb-5 text-center">
              <strong>Facilis consequatur eligendi</strong>
            </h4>

            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <form>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <MDBInput label="First Name" id="form1" type="text" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                      <MDBInput label="Last Name" id="form1" type="text" />
                      </div>
                    </div>
                  </div>

                  {/* Email input  */}
                  <div className="form-outline mb-4">
                  <MDBInput label="Email address" id="typeEmail" type="email" />
                  </div>
                  {/* Password input  */}
                  <div className="form-outline mb-4">
                  <MDBInput label="Password" id="typePassword" type="password" />
                  </div>

                  {/* Checkbox  */}
                  <div className="form-check d-flex justify-content-center mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Subscribe to our newsletter' defaultChecked />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Sign up
                  </button>

                  {/*  Register buttons */}
                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
      <hr className="line"></hr>
    </>
  );
};

export default SectionForm;
