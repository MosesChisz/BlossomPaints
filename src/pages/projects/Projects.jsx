import React, { useState } from "react";
import "./Projects.css";
import blogpic02 from "../../assets/projects.png";
import project1 from "../../assets/project3.png";
import project2 from "../../assets/projcets2.png";
import project3 from "../../assets/projects1.png";
import project4 from "../../assets/projects5.png";
import project5 from "../../assets/home3.png";
import { Image } from "antd";
import Footer from "../../components/footer/Footer";

function Projects() {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <div className="container-fluid" id="projectPage">
        <h1>Our Works</h1>
      </div>

      <div className="container" id="ourWorkBtnsBox">
        <div id="ourWorkBtns">
          <div>
            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              All
            </button>
          </div>
          <div>
            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              Roofing
            </button>
          </div>

          <div>
            <button
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleButtonClick(3)}
            >
              Flooring
            </button>
          </div>

          <div>
            <button
              className={activeButton === 4 ? "active" : ""}
              onClick={() => handleButtonClick(4)}
            >
              Durawalls
            </button>
          </div>

          <div>
            <button
              className={activeButton === 5 ? "active" : ""}
              onClick={() => handleButtonClick(5)}
            >
              Pavings
            </button>
          </div>

          <div>
            <button
              className={activeButton === 6 ? "active" : ""}
              onClick={() => handleButtonClick(6)}
            >
              Buildings
            </button>
          </div>

          <div>
            <button
              className={activeButton === 7 ? "active" : ""}
              onClick={() => handleButtonClick(7)}
            >
              Painting
            </button>
          </div>
        </div>
      </div>
      <div className="container" id="projectPageBox">
        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={blogpic02}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={project1}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={project3}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={blogpic02}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-4">
          <div id="projectPicCard">
            <Image
                  src={project4}
                
                />
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="projectPicCard">
            <Image
                  src={blogpic02}
                 
                />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={blogpic02}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={project5}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={project2}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={blogpic02}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 col-md-4">
          <div id="projectPicCard">
            <Image
                  src={project1}
                
                />
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="projectPicCard">
            <Image
                  src={blogpic02}
                 
                />
            </div>
          </div>
        </div>


        <div class="row">
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={blogpic02}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={project1}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-4">
            <div id="projectCard">
              <div id="projectCardImgB">
                <Image
                  src={project2}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
              <div id="projectCardImg">
                <Image
                  src={blogpic02}
                  style={{ borderRadius: 4, height: 150 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Projects;
