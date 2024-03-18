import React from "react";
import "./Contact.css";
import Footer from "../../components/footer/Footer";

function Contact() {
  return (
    <>
      <div className="container-fluid" id="contactPage">
        <h1>Contact Us</h1>
      </div>
      <div className="container" id="contactPageBox">
        <div class="row">
          <div class="col-lg-8 col-md-4">
            <div id="contactUsCard">
              <h4>
                We are committed, <br /> to delivering high-quality services,
                <br /> to our clients. <br />
                Please visit our offices.
              </h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="contactUsCard">
              {" "}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.7279284778724!2d28.1970289!3d-26.1729888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951150e00db2d7%3A0xf409a5cdd57311cc!2s3%20Jaguar%20Rd%2C%20Rustivia%2C%20Germiston%2C%201401!5e0!3m2!1sen!2sza!4v1710497860530!5m2!1sen!2sza"
                width="100%"
                height="400"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div id="contactHiring">
          <h4>We are hiring !</h4>
          <p>
            We are currently hiring. Do you have what it takes? If you possess
            the necessary skills, please refer to the information provided below
            to apply.
          </p>
          <div class="row">
            <div class="col-lg-4 col-md-4">
              <ul id="hireCard">
                <li>Sales Lady</li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4">
            <ul id="hireCard">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-4">
            <ul id="hireCard">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row" id="homeContact">
          <div class="col-lg-8 col-md-4">
          <form action="https://formsubmit.co/bffe408d9e8549ed336d77087758ba1d" method="POST">
            <h4>Get InTouch With Us</h4>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input type="email" class="form-control" id="homeContactInput" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone Number
              </label>
              <input type="number" class="form-control" id="homeContactInput" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="homeContactInput"
                rows="3"
              ></textarea>
            </div>
            <div id="homeContactBtn">
              <button>send</button>
            </div>
            </form>w
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="homeContactCard">
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-map"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                  3 Jaguar Road, Rustivia Germiston<br></br>
                  Johannesburg, South Africa
                  </p>
                </div>
              </div>
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-calendar"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                    Mon ~ Sunday<br></br>Open Holidays
                  </p>
                </div>
              </div>
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-phone"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                    +27 62 016 2346 <br></br>
                    +27 67 114 8294<br></br>
                    <br></br>
                    
                  </p>
                </div>
              </div>
              <div id="homeContactCardInfor">
                <div id="homeContactCardIcon">
                  <i class="bx bx-envelope"></i>
                </div>
                <div id="homeContactCardIText">
                  <p>
                    sales@blossompaints.co.za<br></br>
                    www.blossompaints.co.za
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
