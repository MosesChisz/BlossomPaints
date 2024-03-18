import React from "react";
import { useNavigate, Link } from "react-router-dom";
import blogbanner from "../../assets/construction.jpg";

function Blog02() {
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
        <h4>Innovations in Modern Painting Technology</h4>
        <div id="blogText">
          <p>
            Water-based paints, also known as latex or acrylic paints, 
            have gained popularity due to their low toxicity, 
            quick drying times, and ease of cleanup with water. 
            These paints emit fewer VOCs compared to solvent-based alternatives, 
            making them a more environmentally friendly option for both interior and exterior applications..
          </p>
          <p>
            Nano coatings utilize nanotechnology to create thin protective 
            layers on surfaces, offering enhanced durability, resistance 
            to stains, and protection against UV radiation and weathering. 
            These coatings can be applied to various substrates, including metals, 
            wood, and plastics, providing long-lasting protection and 
            reducing the need for frequent repainting..
          </p>
          <p>
            Anti-graffiti coatings form a protective barrier on surfaces, 
            making it easier to remove graffiti and preventing damage to 
            underlying substrates. These coatings can be either sacrificial 
            (allowing graffiti to be easily wiped off) or permanent (providing 
            long-lasting protection), helping to mitigate the costs and 
            inconvenience associated with graffiti vandalism.
          </p>
          <p>
            Digital printing technology allows for highly customizable and detailed 
            paint finishes, enabling intricate designs, patterns, and images to be 
            reproduced with precision. This technology is used in architectural coatings, 
            decorative finishes, and artistic applications, offering endless possibilities 
            for creative expression and customization.
          </p>
          <p>
            Temperature-responsive paints, also known as thermochromic paints, 
            change color in response to temperature variations. These paints 
            have applications in temperature monitoring, safety signage, 
            and decorative finishes, providing visual cues to indicate changes 
            in temperature or surface conditions.
          </p>
          
        </div>
        <div id="blogSocialLinks">
          <h5>Follow Us</h5>{" "}
          <button>
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

export default Blog02;
