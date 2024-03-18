import React from "react";
import "./Home.css";
import homebanner from "../../assets/homebanner.jpeg";
import homebanner2 from "../../assets/products.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="reviewCard">
      <div id="reviewCardInner">
        <h1>
          Building
          <br /> Dreams,
          <br /> One color at a Time
        </h1>
        <p>
          Welcome to Blossom Paints, where we turn your dreams into
          reality. With precision and passion, we paint spaces that inspire
          and endure.
        </p>
      </div>
    </div>,
    <div id="reviewCard01">
      <div id="reviewCardInner">
        <h1>
          Crafting <br />
          Architectural Marvels
        </h1>
        <p>
          Step into a world of color brilliance and design ingenuity. From 
          vibrant skyscrapers to inviting homes, our team of experts crafts coatings 
          that transform structures into timeless works of art.          
        </p>
      </div>
    </div>,
    <div id="reviewCard02">
      <div id="reviewCardInner">
        <h1>
          Transform Your, House Into
          <br /> A Home Wall & Floor Textured
        </h1>
        <p>
            Unlock the transformative potential of painting. With every brushstroke, 
            we reimagine spaces and elevate experiences. 
            Welcome to a world where possibilities are endless.
        </p>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <>
      <div>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          disableButtonsControls={true}
          disableDotsControls={true}
          infinite={true}
          autoPlayInterval={5000}
          responsive={responsive}
          animationType="fadeout"
        />
      </div>
      <div className="container" id="homeOfferPage">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="homeOfferCard">
              <div id="homeOfferCardBox">
                <i class="bx bx-buildings"></i>
                <h5>Infrustructure Development</h5>
              </div>
              <div id="homeOfferCardBox">
                <i class="bx bx-map-pin"></i>
                <h5>Quantity Surveying</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="homeOfferCard">
              <div id="homeOfferCardBox">
                <i class="bx bx-hive"></i>
                <h5>Persian Plaster</h5>
              </div>
              <div id="homeOfferCardBox">
                <i class="bx bx-briefcase-alt-2"></i>
                <h5>Commercial painting</h5>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="homeAboutCard">
              <h4>Who Are We ?</h4>
              <p>
                With over 10 years of Experience Blossom Paints has been involved in
                projects across various countries, including
                South Africa, Zambia, and Zimbabwe. Established in 2010, we have
                expanded our presence in the industry, earning the trust of
                thousands of clients and completing over 1000 projects. Our team
                of dedicated professionals is committed to delivering
                high-quality construction solutions tailored to meet the unique
                needs of each project. From residential developments to
                commercial complexes, our expertise spans a wide range of
                sectors, ensuring excellence and innovation in every endeavor.
                At Blossom Paints, we take pride in our reputation for reliability,
                integrity, and customer satisfaction, and we look forward to
                partnering with you to bring your home vision to life.{" "}
              </p>

              <button
                onClick={() => {
                  navigate("/about");
                }}
              >
                READ MORE
              </button>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="homeAboutCard">
              <img src={homebanner} />
            </div>
          </div>
        </div>
        <div id="homeMissionCard">
          <div id="homeMissionCardBox">
            <div id="homeMissionCardBoxCard">
              {" "}
              <h4>
                Our mission is to revolutionize the world of colors by 
                offering cutting-edge solutions, promoting eco-friendly 
                practices, and crafting vibrant coatings that leave a lasting 
                impression. We aspire to inspire creativity, transform spaces, 
                and elevate aesthetics, all while upholding the highest standards of quality, 
                durability, and artistic flair.
              </h4>
            </div>
            <div id="homeMissionCardBoxButton">
                <a href="https://wa.me/+27620162346" target="_blank">
                    <button>
                        GET A FREE QUOTATION
                    </button>
                </a>
            </div>

          </div>
        </div>

        <div>
          <div class="row" id="homeContact">
            <div class="col-lg-8 col-md-4">
              <h4>Get InTouch With Us</h4>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="homeContactInput"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="homeContactInput"
                />
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
                      +277 620 162 346 <br></br>
                      
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

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
              <div id="modalHeader">
                <div id="modalTitle">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Get A Free Quotation Now
                  </h1>
                </div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  id="closeBtn"
                ></button>
              </div>
              <div class="modal-body" id="modalBody">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="modalInput"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="modalInput"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="modalInput"
                    rows="3"
                  ></textarea>
                </div>
                <div id="quoteModalBtn">
                  <button>send</button>
                </div>
              </div>
         
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
