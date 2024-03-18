import React from "react";
import "./About.css";
import logo from "../../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import aboutbanner from "../../assets/abtstrory.jpg";
import blogbanner from "../../assets/logo.png";
import blogbanner1 from "../../assets/projects.png";
import blogpic02 from "../../assets/construction.jpg";
import Footer from "../../components/footer/Footer";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid" id="aboutPage">
        <h1>ABOUT US</h1>
      </div>
      <div className="container" id="aboutPageBox">
        <div id="aboutPageBoxCard">
          <div id="aboutPageBoxCardImg">
            <img src={logo} />
          </div>
          <div id="aboutPageBoxCardText">
            <h4>Blossom Paints Pvt Ltd</h4>
            <p>
              With over 10 years of Experience Blossom Paints has been 
              involved in projects across various countries, 
              including South Africa, Zambia, and Zimbabwe. Established in 2010, 
              we have expanded our presence in the industry, earning the trust of 
              thousands of clients and completing over 1000 projects.
            </p>
          </div>
        </div>
        <div class="row" id="storyAboutPage">
          <div class="col-lg-4 col-md-4">
            <div id="aboutHistoryImg">
              <img src={aboutbanner} alt />
            </div>
          </div>
          <div class="col-lg-8 col-md-4">
            <div id="aboutStoryText">
              <h4>Our Story</h4>
              <p>
                With over 10 years of expertise, Blossom Paints has been deeply 
                immersed in the realm of paints across various regions, including
                South Africa, Zambia, and Zimbabwe. Since our inception in 2010,
                we've expanded our footprint in the industry, earning the trust of numerous customers and 
                contributing to over a thousand paint projects. Our team of 
                passionate professionals is dedicated to delivering top-notch 
                paint solutions tailored to suit the distinct requirements of each endeavor. 
                Whether it's residential refurbishments or commercial renovations, 
                our proficiency covers a broad spectrum of applications, ensuring 
                ingenuity and quality in every brushstroke. At Blossom Paints, we cherish 
                our standing for dependability, honesty, and client contentment, 
                and we eagerly anticipate collaborating with you to fulfill your painting aspirations.{" "}
              </p>

              <p>
                At Blossom Paints, our mission transcends the mere sale of paints; we aim to enrich lives through the
                transformative power of color. We endeavor to inspire creativity and elevate environments,
                whether it's revitalizing homes, enhancing commercial spaces, or beautifying public areas. 
                Committed to sustainability, we prioritize eco-friendly formulations and manufacturing processes, 
                mindful of our impact on the planet. We foster partnerships with painters, decorators, and DIY 
                enthusiasts, providing them with innovative products, expert guidance, and unparalleled support. 
                At Blossom Paints, we're not just selling paints; we're empowering individuals to express themselves,
                leaving a colorful mark on the world.
              </p>
            </div>
          </div>
        </div>
        <div class="row" id="aboutOfferWrap">
          <div class="col-lg-6 col-md-4">
            <div id="aboutOfferWrapCard">
              <div id="aboutOfferWrapBox">
                <h1>10+</h1>
                <p>Years Experience</p>
              </div>

              <div id="aboutOfferWrapBox">
                <h1>1000+</h1>
                <p>Completed Projects</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="aboutOfferWrapCard">
              <div id="aboutOfferWrapBox">
                <h1>500+</h1>
                <p>Affiliated Clients</p>
              </div>

              <div id="aboutOfferWrapBox">
                <h1>10+</h1>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div id="accordionPage">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <h4>Why Choose Us</h4>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Industry Leaders in Painting Excellence
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  With decades of combined experience and a proven track record
                  of successful projects, we bring unparalleled expertise to
                  every painting endeavor. Our seasoned team of
                  professionals is committed to delivering superior quality,
                  precision, and innovation in every aspect of our work.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Your Vision, Our Priority
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At Blossom Paints, client satisfaction is at the heart of
                  everything we do. We listen closely to your needs, collaborate
                  transparently, and customize our solutions to exceed your
                  expectations. Your vision is our priority, and we are
                  dedicated to bringing it to life with integrity,
                  professionalism, and unwavering dedication.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Uncompromising Commitment to Excellence
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Our commitment to quality is unwavering. From meticulous
                  planning to rigorous quality control measures, we ensure that
                  every project is executed to the highest standards of
                  craftsmanship and precision. With Blossom Paints, you can trust
                  that your project will be built with uncompromising quality
                  and attention to detail.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Pioneering Painting Innovation
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Embracing the latest advancements in technology and
                  painting practices, we strive to push the boundaries of
                  innovation in every project we undertake. From sustainable
                  building techniques to cutting-edge design concepts, we are
                  committed to delivering forward-thinking solutions that set
                  new benchmarks in the industry.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Your Trusted Partner from Concept to Completion
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  At Blossom Paints, we believe in building lasting relationships
                  with our clients. Our dedicated team provides comprehensive
                  support throughout every stage of the painting process,
                  from initial concept development to project completion and
                  beyond. With Blossom Paints by your side, you can trust that you
                  have a reliable partner committed to your success.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row" id="blogPage">
          <h4>Our Blog</h4>
          <div class="col-lg-4 col-md-4">
            <div id="blogCard">
              <img src={blogbanner} alt="" />
              <h5>The Importance of Sustainable Painting </h5>
              <p>
                In recent years, sustainable painting practices have gained
                significant traction in the painting industry, including at
                Blossom Paints.
              </p>
              <button
                onClick={() => {
                  navigate("/blog01");
                }}
              >
                READ MORE
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="blogCard">
              <img src={blogpic02} alt="" />
              <h5> Innovations in Modern Paintings </h5>
              <p>
                In the dynamic landscape of the painting industry, Blossom
                Paints recognizes the importance of embracing innovation
                
              </p>
              <button
                onClick={() => {
                  navigate("/blog02");
                }}
              >
                READ MORE
              </button>
            </div>
          </div>
          <div class="col-lg-4 col-md-4">
            <div id="blogCard">
              <img src={blogbanner1} alt="" />
              <h5>
                {" "}
                Sustainable Painting Practices, Building a Greener Future{" "}
              </h5>
              <p>
                At Blossom Paints, we are committed to advancing
                sustainable painting practices that minimize ..
              </p>
              <button
                onClick={() => {
                  navigate("/blog03");
                }}
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
