import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="container-fluid" id="footerPage">
      <div class="row">
        <div class="col-lg-6 col-md-4">
          <div id="footerCard">
            {/* <h4>ABOUT</h4> */}
         <div id="footerImgBox">
         {/* <img src={logo} /> */}
         <h5>Blossom Paints Pvt Ltd</h5>
         </div>
            <p>
              With over 10 years of Experience Blossom Paints has been 
              involved in projects across various countries, 
              including South Africa, Zambia, and Zimbabwe. Established in 2010,
              we have expanded our presence in the industry, earning the trust 
              of thousands of clients and completing over 1000 projects.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
          <div id="footerCard">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-4">
        <div id="footerCard">
          <h4>SOCIALS LINKS</h4>
            <p><a href="https://www.instagram.com/your_instagram_page"><i class="bx bxl-instagram"></i> Instagram</a></p>
            <p><a href="https://www.facebook.com/BlossomPaintz"><i class="bx bxl-facebook"></i> Facebook</a></p>
            <p><a href="https://twitter.com/your_twitter_page"><i class='bx bxl-twitter'></i> Twitter</a></p>
          </div>

        </div>
      </div>
      <div id="footerRightBox" className="container">
        <small>
          {" "}
          &copy; Blossom Paints 2024. Developed by <a href="https://moseschisango.netlify.app/">MosesChisz</a>
        </small>
      </div>
    </div>
  );
}

export default Footer;
