import React from "react";
import { FaSun } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaCloudRain } from "react-icons/fa";
import stickerimage1 from "../assets/images/catstick1.png";
import stickerimage2 from "../assets/images/catstick2.png";
import stickerimage3 from "../assets/images/catstick3.png";
import stickerimage4 from "../assets/images/catstick4.png";
import profile from "../assets/images/Ellipse 14.png";
import catbanner from "../assets/images/catb.png";
import train1 from "../assets/images/coller.png";
import train2 from "../assets/images/ball.png";
import train3 from "../assets/images/roap.png";
import brush from  "../assets/images/brush.png";
import sampo from  "../assets/images/sampu.png";
function CatProfile() {
  return (
    <>
      <div className="container-fluid husky-container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4 husky-parent text-center mb-4 mb-lg-0">
            <img
              src={profile}
              className="huskyBorder rounded-circle img-fluid"
              alt="Husky Logo"
            />
            <h5 className="Husky-logo-cont">Husky</h5>
          </div>

          <div className="col-12 col-lg-7">
            <div className="row justify-content-lg-between justify-content-center gap-5">
              <div
                className="husky-square col-10 col-md-5 d-flex justify-content-evenly align-items-center"
                role="button"
              >
                <h3 className="husky-head">About</h3>
                <img src={stickerimage1} className=" husky-img" alt="About" />
              </div>

              <div
                className="husky-square col-10 col-md-5 d-flex justify-content-evenly align-items-center"
                role="button"
              >
                <h3 className="husky-head">About</h3>
                <img src={stickerimage2} className=" husky-img" alt="About" />
              </div>
            </div>
            <div className="row justify-content-lg-between justify-content-center gap-5 mt-3">
              <div
                className="husky-square col-10 col-md-5 justify-content-evenly d-flex align-items-center"
                role="button"
              >
                <h3 className="husky-head">About</h3>
                <img src={stickerimage3} className=" husky-img" alt="About" />
              </div>

              <div
                className="husky-square col-10 col-md-5 justify-content-evenly d-flex align-items-center"
                role="button"
              >
                <h3 className="husky-head">About</h3>
                <img src={stickerimage4} className=" husky-img" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid about-main-husky">
        <div className="row about-main-husky-row flex-md-row flex-column align-items-md-center">
          <div className="col-md-4 col-12 text-center left-content-Husky">
            <h3 className="custom-underline">Manx Cat</h3>
            <p>
              Characteristics, Personality, and Breed <br></br> Information
            </p>
          </div>
          <div className="col-md-4 col-12">
            <img src={catbanner} className="img-fluid" alt="Husky" />
          </div>
          <div className="col-md-3 col-12 mt-5">
            <p className="h7 fs-5">
              <strong> Coat:</strong>
              Smooth and Glassy
            </p>
            <p className="h7 fs-5">
              <strong> Size:</strong>
              Small
            </p>
            <p className="h7 fs-5">
              <strong> Life Expectancy:</strong>
              12-16 years
            </p>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row text-center">
          {/* Coat Colours */}
          <div className="col-md-4 d-flex flex-column mb-4 align-items-center">
            <h1>Group</h1>
            <p>Medium-sized short-haired</p>
          </div>

          {/* Weight & Height */}
          <div className="col-md-4 mb-4 wight-height">
            <h5 className="fw-bold mb-3">Weight:</h5>
            <p>7-13</p>
            <h5 className="fw-bold mb-3">Height:</h5>
            <p>10"-14"</p>
          </div>

          {/* Adaptability */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Adaptability</h5>
            <p>Temperatures should be moderate for cat</p>
            <div className="row">
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <FaSun color="#ff7a51" size={40} />
                  <p className="fw-bold">
                    Hot weather
                    <br />
                    tolerance:
                  </p>
                </div>
                <p className="fs-5 fw-bold">Up to 32-10&deg;</p>
              </div>
              <div className="col-6">
                <div className="d-flex align-items-center">
                  <FaCloudRain color="#B0E9FF" size={40} />
                  <p className="fw-bold">
                    Cold weather
                    <br />
                    tolerance:
                  </p>
                </div>
                <p className="fs-5 fw-bold">Up to -10&deg;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container me-3">
        <h1>Traits</h1>
        <div className="row my-5">
          <div className="col">
            <ProgressBar style={{ width: "180px" }}>
              <ProgressBar
                style={{
                  backgroundColor: "#FF7A51",
                  border: "solid 1px #FF7A51",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{
                  backgroundColor: "white",
                  border: "solid 1px #FF7A51",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                now={20}
                key={2}
              />
            </ProgressBar>
            <h5 className="mt-4 fs-4">Friendliness</h5>
          </div>

          <div className="col">
            <ProgressBar style={{ width: "180px" }}>
              <ProgressBar
                style={{
                  backgroundColor: "#FF7A51",
                  border: "solid 1px #FF7A51",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{
                  backgroundColor: "white",
                  border: "solid 1px #FF7A51",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                now={20}
                key={2}
              />
            </ProgressBar>
            <h5 className="mt-4 fs-4">
              Good with
              <br /> other dogs
            </h5>
          </div>

          <div className="col">
            <ProgressBar style={{ width: "180px" }}>
              <ProgressBar
                style={{
                  backgroundColor: "#FF7A51",
                  border: "solid 1px #FF7A51",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{
                  backgroundColor: "white",
                  border: "solid 1px #FF7A51",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                now={20}
                key={2}
              />
            </ProgressBar>
            <h5 className="mt-4 fs-4">Good with Kids</h5>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <ProgressBar style={{ width: "180px" }}>
              <ProgressBar
                style={{
                  backgroundColor: "#FF7A51",
                  border: "solid 1px #FF7A51",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{
                  backgroundColor: "white",
                  border: "solid 1px #FF7A51",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                now={20}
                key={2}
              />
            </ProgressBar>
            <h5 className="mt-4 fs-4">Energy level</h5>
          </div>

          <div className="col">
            <ProgressBar style={{ width: "180px" }}>
              <ProgressBar
                style={{
                  backgroundColor: "#FF7A51",
                  border: "solid 1px #FF7A51",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{
                  backgroundColor: "white",
                  border: "solid 1px #FF7A51",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                now={20}
                key={2}
              />
            </ProgressBar>
            <h5 className="mt-4 fs-4">Barking</h5>
          </div>

          <div className="col">
            <ProgressBar style={{ width: "180px" }}>
              <ProgressBar
                style={{
                  backgroundColor: "#FF7A51",
                  border: "solid 1px #FF7A51",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{ backgroundColor: "#FF7A51" }}
                now={20}
                key={2}
              />
              <ProgressBar variant="white" now={1} key={2} />
              <ProgressBar
                style={{
                  backgroundColor: "white",
                  border: "solid 1px #FF7A51",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
                now={20}
                key={2}
              />
            </ProgressBar>
            <h5 className="mt-4 fs-4">Playfulness</h5>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center">
          {/* Diet Tips Section */}
          <div className="col-md-7">
            <h2 className="fw-bold mb-3">Diet</h2>

            <p>
              Manx cats have no special dietary needs; however, it is best to
              <br></br>
              offer a high-quality diet that includes real meat or fish as the
              <br></br>
              number one ingredient.
            </p>
          </div>

          {/* Product Cards Section */}
          <div className="col-md-5 col-12">
            <img
              src={profile}
              style={{ width: "400px", height: "200px" }}
              className="img-fluid"
            ></img>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-md-flex flex-columns   align-items-center">
          {/* Text & Cards */}
          <div className="col-12 col-md-6 " style={{ maxWidth: "80%" }}>
            <h1>Training</h1>
            <p>
              The Manx typically displays incredible athletic prowess, running
              <br></br> at high speeds, leaping to the highest possible heights,
              and <br></br>climbing anything that happens to be available. Tall
              cat towers,<br></br> scratching posts, and a wide variety of toys
              can help satisfy your<br></br> cat’s play drive. Since Manx cats
              appreciate interactive play, look<br></br> for toys that let you
              be part of the action, too!
            </p>
          </div>

          {/* Cards Row */}
          <div className="col-md-6 col-12  flex-column  d-flex flex-md-row  justify-content-md-between g-3">
            <div
              className="col-12 col-sm-5 col-lg-3 text-center mt-2"
              style={{ backgroundColor: "#eec14c", padding: "10px" }}
            >
              <img
                src={train1}
                className="img-fluid mb-2"
                style={{ maxHeight: "100px", objectFit: "contain" }}
                alt="Training gadget"
              />
              <h6 className="fs-6">Training gadget</h6>
              <button
                className="btn fw-bold mt-2"
                style={{ backgroundColor: "#ff7a3d" }}
              >
                Add to Cart
              </button>
            </div>

            <div
              className="col-12 col-sm-5 col-lg-3 text-center mt-2"
              style={{ backgroundColor: "#eec14c", padding: "10px" }}
            >
              <img
                src={train2}
                className="img-fluid mb-2"
                style={{ maxHeight: "100px", objectFit: "contain" }}
                alt="Training gadget"
              />
              <h6 className="fs-6">Training gadget</h6>
              <button
                className="btn fw-bold mt-2"
                style={{ backgroundColor: "#ff7a3d" }}
              >
                Add to Cart
              </button>
            </div>

            <div
              className="col-12 col-sm-5 col-lg-3 text-center mt-2"
              style={{ backgroundColor: "#eec14c", padding: "10px" }}
            >
              <img
                src={train3}
                className="img-fluid mb-2"
                style={{ maxHeight: "100px", objectFit: "contain" }}
                alt="Training gadget"
              />
              <h6 className="fs-6">Training gadget</h6>
              <button
                className="btn fw-bold mt-2"
                style={{ backgroundColor: "#ff7a3d" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
          {/* Image */}
        </div>
      </div>

      <div className="container mt-5">
        <div className="row  d-flex flex-column flex-md-row align-items-center ">
          {/* Left Text Content */}
          <div className="col-md-7 col-12">
            <div className="mt-5">
              <h5>
                <strong>Grooming</strong>
              </h5>
              <p>
                Shorthaired Manx cats require brushing just once or twice per<br></br>
                week to remove excess hair. If you have a long-haired Manx, plan<br></br>
                to brush them at least once per day to prevent mats from forming<br></br>
                in their fine undercoat. As the Manx is prone to jumping and<br></br>
                climbing with great vigor, you may wish to keep their claws<br></br>
                trimmed short as a method of providing some protection for your<br></br>
                belongings. One more thing: Just like other breeds, Manx cats<br></br>
                benefit from at-home dental care. Consider teaching your kitten<br></br>
                to accept toothbrushing from a young age
              </p>
            </div>
          </div>

          {/* Right Card Content */}
          <div className="col-md-5 col-12">
            <div className="row align-items-center g-3 mt-4 mt-md-0 justify-content-center">
              {/* Card 1 */}
              <div className="col-md-5 col-11">
                <div
                  className="card text-center border-0 shadow-sm"
                  style={{ backgroundColor: "#facc15" }}
                >
                  <img
                    src={brush}
                    className="card-img-top p-3 img-fluid"
                    alt="Brushes"
                  />
                  <div className="card-body">
                    <p className="card-text fw-medium">
                      Brush&Compo
                    </p>
                    <button className="btn btn-danger">Add to Cart</button>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-md-5 col-11">
                <div
                  className="card text-center border-0 shadow-sm"
                  style={{ backgroundColor: "#facc15" }}
                >
                  <img
                    src={sampo}
                    className="card-img-top p-3 img-fluid"
                    alt="Brushes"
                    style={{ height: "100px" }}
                  />
                  <div className="card-body">
                    <p className="card-text fw-medium">
                      Sampo
                    </p>
                    <button className="btn btn-danger">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatProfile;
