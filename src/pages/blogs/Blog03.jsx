import React from "react";
import { useNavigate, Link } from "react-router-dom";
import blogbanner from "../../assets/construction.jpg";

function Blog03() {
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
        <h4>Sustainable Painting Practices, Building a Greener Future</h4>
        <div id="blogText">
          <p>
            Low-VOC (volatile organic compound) and zero-VOC paints emit 
            fewer harmful chemicals into the air compared to traditional 
            paints, promoting healthier indoor air quality and reducing 
            environmental impact. These paints are made with water-based 
            formulations or natural ingredients, making them safer for 
            both painters and building occupants.
          </p>
          <p>
            Recycled paints are made from post-consumer paint waste that 
            has been processed and reprocessed to create new paint products. 
            By utilizing recycled materials, these paints reduce the demand 
            for virgin resources, minimize waste, and lower the carbon 
            footprint of paint production.
          </p>
          
          <p>
            Water-based paints, also known as latex or acrylic paints, have a 
            lower environmental impact compared to solvent-based paints. 
            These paints are easier to clean up with water, produce fewer 
            emissions during application, and have lower levels of toxicity, 
            making them a more environmentally friendly option for both 
            interior and exterior painting projects.
          </p>
          <p>
            Choosing paint products that are locally sourced helps reduce 
            transportation emissions associated with long-distance shipping. 
            Additionally, supporting local manufacturers and suppliers promotes 
            local economies and strengthens community resilience.
          </p>
          <p>
            Educating customers about the benefits of sustainable painting 
            practices and offering guidance on environmentally friendly 
            paint options empowers them to make informed choices that align 
            with their values and contribute to building a greener future.
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

export default Blog03;
