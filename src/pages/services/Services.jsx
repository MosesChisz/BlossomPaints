import React from "react";
import "./Services.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Footer from "../../components/footer/Footer";

function Services() {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C, Zimbabwe ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          John Doe, USA C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Trish G, Brazil ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Travor S ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Lylod P, S Africa C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Tatenda B, Mozambique C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/girl" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,

    <div id="partnerCard">
      <div id="partnerCardBox">
        <img src="https://avatar.iran.liara.run/public/boy" />
        <i class="bx bxs-quote-left"></i>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, <i class="bx bxs-quote-right"></i>
        </p>
        <small>
          Archford C ~ <i>20 Oct 2020</i>
        </small>
      </div>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    1024: { items: 3 },
  };
  return (
    <>
      <div className="container-fluid" id="servicePage">
        <h1>Our Services</h1>
      </div>

      <div className="container" id="servicePageSection">
        <h4>What We do</h4>
        <div class="row">
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>LIQUID MARBLE</h6>
              <ul>
                <li>Liquid marble is a unique surface treatment technique that involves blending liquid pigments into marble-like patterns.</li>
                <li>It creates mesmerizing and organic patterns that resemble natural marble but with a fluid, flowing appearance.</li>
                <li>Feasibility studies</li>                
                
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>PERSIAN PLASTER</h6>
              <ul>
                <li> It can be tinted to a wide range of colors and textures, allowing for endless customization to suit various design styles and preferences.</li>
                <li>Persian plaster, or polished plaster, is a decorative wall finish that originated in ancient Persia </li>
                             
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>GAMAZINE</h6>
              <ul>
                <li> Gamazine is a decorative wall coating made from a mixture of marble chips, quartz sand, and acrylic resin.</li>
                <li>It is applied in a thick paste-like consistency and then smoothed out to create a seamless, textured surface.</li>
                <li>Custom homes</li>
                <li>Renovations</li>
               
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>GLAMOUR COAT</h6>
              <ul>
                <li> Glamour coat is a high-quality decorative wall coating known for its luxurious and elegant finish</li>                
                <li>It is made from a blend of fine aggregates, binders, and additives that create a smooth and glossy surface.</li>          
                <li>Interior finishing</li>
                <li>Exterior finishing</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>ROOF RUBBER SEALANT</h6>
              <ul>
                <li> Roof rubber sealant is a waterproofing material designed to protect roofs from leaks and water damage.</li>
                <li>Roof rubber sealant is a waterproofing material designed to protect roofs from leaks and water damage.</li>
                <li> prevents water infiltration and enhances roof longevity.</li>              
                
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>ROOF PAINT</h6>
              <ul>
                <li> Roof paint is a specialized coating designed to protect and enhance the appearance of roofs.</li>
                <li>It is formulated with durable pigments, binders, and additives that provide weatherproofing and UV resistance.</li>              
                <li>Interior finishing</li>
                <li>Exterior finishing</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>Interior Finishing</h6>
              <ul>
                <li> Asbestos abatement</li>
                <li>Lead abatement</li>
                <li>Mold remediation</li>
                <li>Historic preservation</li>
                <li>Green building</li>                
                <li>Exterior Painting</li>
                <li>Cabinet and Countertop Installations</li>
                <li>Appliance Installation</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div id="serviceCard">
              <h6>Other Services</h6>
              <ul>
                <li> Tilling</li>
                <li>Carpet Flooring</li>
                <li>Hardwood floors</li>
                <li>Natural Stone Flooring</li>
                <li>Concrete Flooring</li>
                <li>Vinyl Flooring</li>
                <li>Laminate Flooring</li>
                <li>Landscape architecture</li>                
                <li>Trim Installations</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container" id="theParterPageSection">
          <h2>Testimonials</h2>
          <h4>What our clients say about us</h4>
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            disableButtonsControls={true}
            disableDotsControls={false}
            infinite={true}
            autoPlayInterval={3000}
            responsive={responsive}
          />
        </div>
    
      </div>
      <Footer />
    </>
  );
}

export default Services;
