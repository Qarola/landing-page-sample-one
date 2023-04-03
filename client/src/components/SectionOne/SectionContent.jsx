import React from "react";
import image44 from "../../img/image44.jpg";

const SectionContent = () => {
  return (
    <>
      <main className="mt-5" id='about'>
        <div className="container">
          <section className="section1">
            <div className="row">
              <div className="col-md-6 gx-5 mb-4">
                <div
                  className="bg-image hover-overlay ripple shadow-2-strong image1"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={image44}
                    alt="cup of tea"
                    className="img-fluid shadow-3-strong img1"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
              </div>

              <div className="col-md-6 gx-3 mb-4 title">
                <h3>
                  <strong>About Us</strong>
                </h3>
                <p className="text-muted txt-u">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis consequatur eligendi quisquam doloremque vero ex
                  debitis veritatis placeat unde animi laborum sapiente illo
                  possimus, commodi dignissimos obcaecati illum.
                </p>
                <h5>
                  <strong>Why Choose Us?</strong>
                </h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  itaque voluptate nesciunt laborum incidunt. Officia, quam
                  consectetur. Earum eligendi aliquam illum alias, unde optio
                  accusantium soluta, iusto molestiae adipisci et.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <hr className="line"></hr>
    </>
  );
};
export default SectionContent;
