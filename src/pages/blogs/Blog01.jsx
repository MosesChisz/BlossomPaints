import React from "react";
import "./Blog01.css";
import blogbanner from "../../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";

function Blog01() {
  const navigate = useNavigate();
  return (
    <div className="container" id="blogePage">
      <div id="blogPage01">
        <img src={blogbanner} />
        <div id="blogAuther">
          <h5>Blossom Paints</h5>
          <p>
            <i>12 0ctober 2010</i>
          </p>
        </div>
        <h4>The Importance of Sustainable Paints Practices</h4>
        <div id="blogText">
          <p>
            In recent years, sustainable practices in the paint industry have gained considerable momentum,
            including at Blossom Paints. This transition is propelled by a heightened consciousness of
            environmental concerns and the imperative to mitigate the ecological footprint of paint production
            and application processes. Sustainable painting entails adopting methods that strive to curtail
            resource usage, diminish waste generation, and advocate for the utilization of environmentally
            friendly paint formulations and application techniques.
          </p>
          <p>
            At Blossom Paints, we prioritize sustainability, particularly in 
            reducing environmental impact throughout the painting process. 
            Traditional paints often contribute to pollution through volatile 
            organic compounds (VOCs) and energy-intensive manufacturing. 
            Blossom Paints focuses on eco-friendly production methods, 
            offering low-VOC and zero-VOC paint options to minimize emissions and 
            promote healthier indoor air quality. Additionally, we advocate for the use 
            of recycled materials and water-based formulations, allowing our customers 
            to beautify their spaces while making environmentally conscious choices. 
            Through our commitment to sustainability, Blossom Paints aims to lead 
            the industry towards a greener future.
          </p>
          <p>
              Conventional paints can release harmful chemicals into indoor air, 
              leading to respiratory issues and other health concerns. 
              Sustainable paints, with lower VOC levels and fewer toxic additives, 
              promote better indoor air quality, creating safer and healthier living 
              and working environments for occupants
          </p>
          <p>
              Many sustainable paints are designed to be durable and long-lasting, 
              reducing the need for frequent repainting and minimizing maintenance
              requirements. This not only saves time and resources but also reduces 
              the environmental footprint associated with paint application and disposal.
          </p>
         
        </div>
        <div id="blogSocialLinks">
          <h5>Follow Us</h5>{" "}
          <button onclick="https://wa.me/+27620162346">
            {" "}
            <i class="bx bxl-facebook"></i> Facebook
          </button>
          <button>
            <i class="bx bxl-instagram"></i> Instagram
          </button>
          <button>
            {" "}
            <i class="bx bxl-whatsapp"></i> Whatsapp
          </button>
        </div>
        <div id="blogBackArrow">
          <p
            onClick={() => {
              navigate("/about");
            }}
          >
            <i class="bx bx-chevrons-left"></i> back
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog01;
