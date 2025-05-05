import React from "react";
import "../assets/styles/Husky.css";
import { FaSun } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import ProgressBar from "react-bootstrap/ProgressBar";
import huskycard1 from "../assets/images/husky11.png";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Husky() {
  const [pdata, setPdata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(""); // Fixed typo in variable name
  const { type } = useParams();
   const navigate  = useNavigate()

  useEffect(() => {
    axios
      .get("/data/profile.json")
      .then((res) => {
        const data = res.data[type]?.[0]; // Optional chaining for safety
        setPdata(data || null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setPdata(null);
        setLoading(false);
      });
  }, [type]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pdata) return <div>No data found</div>;

  return (
    <>
      <div className="container-fluid husky-container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4 husky-parent text-center mb-4 mb-lg-0">
            <img
              src={pdata.profileImage}
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
                <h3 role='button' className="husky-head">About</h3>
                <img
                  src={pdata.stickerimages[0]}
                  className=" husky-img"
                  alt="About"
                />
              </div>

              <div
                className="husky-square col-10 col-md-5 d-flex justify-content-evenly align-items-center"
                role="button"
              >
                <h3 className="husky-head">Diet</h3>
                <img
                  src={pdata.stickerimages[1]}
                  className=" husky-img"
                  alt="About"
                />
              </div>
            </div>
            <div className="row justify-content-lg-between justify-content-center gap-5 mt-3">
              <div
                className="husky-square col-10 col-md-5 justify-content-evenly d-flex align-items-center"
                role="button"
              >
                <h3 className="husky-head">Training</h3>
                <img
                  src={pdata.stickerimages[2]}
                  className=" husky-img"
                  alt="About"
                />
              </div>

              <div
                className="husky-square col-10 col-md-5 justify-content-evenly d-flex align-items-center"
                role="button"
              >
                <h3 className="husky-head">Grooming</h3>
                <img
                  src={pdata.stickerimages[3]}
                  className=" husky-img"
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid about-main-husky">
        <div className="row about-main-husky-row flex-md-row flex-column align-items-md-center">
          <div className="col-md-4 col-12 text-center left-content-Husky">
            <h3 className="custom-underline">{pdata.PetPreedA.preed}</h3>
            {pdata.PetPreedA.place2.split("\n").map((line, index) => (
              <h3 key={index}>{line}</h3>
            ))}
            <p className="mt-5 fw-bold">{pdata.PetPreedA.place}</p>
          </div>
          <div className="col-md-4 col-12">
            <img src={pdata.secondbanner} className="img-fluid" alt="Husky" />
          </div>
          <div className="col-md-3 col-12 mt-5">
            <p className="h7 fs-5">
              <strong> Coat:</strong>
              {pdata.petbody.Coat}
            </p>
            <p className="h7 fs-5">
              <strong> Shedding:</strong>
              {pdata.petbody.Shedding}
            </p>
            <p className="h7 fs-5">
              <strong> Size:</strong>
              {pdata.petbody.Size}
            </p>
            <p className="h7 fs-5">
              <strong> Life Expectancy:</strong>
              {pdata.petbody.LifeExpectancy}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row text-center">
          {/* Coat Colours */}
          <div className="col-md-4 d-flex mb-4 align-items-center">
            <div>
              <h5 className="fw-bold mt-2 mb-3">Coat colours:</h5>
            </div>
            <div className="flex-column">
              <div className="color-box p-2 mb-2">{pdata.petcolors[0]}</div>
              <div className="color-box p-2 mb-2">{pdata.petcolors[1]}</div>
              <div className="color-box p-2">{pdata.petcolors[2]}</div>
            </div>
          </div>

          {/* Weight & Height */}
          <div className="col-md-4 mb-4 wight-height">
            <h5 className="fw-bold mb-3">Weight:</h5>
            <p className="mb-2">{pdata.petweight.male}</p>
            <p className="mb-4">{pdata.petweight.female}</p>
            <h5 className="fw-bold mb-3">Height:</h5>
            <p className="mb-2">{pdata.petheight.male}</p>
            <p>{pdata.petheight.female}</p>
          </div>

          {/* Adaptability */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Adaptability</h5>
            <p>Temperatures should be moderate for {type}</p>
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
                <p className="fs-5 fw-bold">{pdata.temprate.hot}</p>
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
                <p className="fs-5 fw-bold">{pdata.temprate.cold}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="abouts" className="container me-3">
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
        <div className="row">
          {/* Diet Tips Section */}
          <div className="col-md-8">
            <h2 className="fw-bold mb-3">Diet</h2>
            <p className="lh-base fs-5">{pdata.diet.diehead}</p>

            <div className="lh-base fs-5">
              <p>
                <strong> {pdata.diet.dietfirsttitle}</strong>
                <br />
                {pdata.diet.dietfirstcontent}
              </p>
              <p>
                <strong> {pdata.diet.dietsecondtitle}</strong>
                <br />
                {pdata.diet.dietsecondcontent}
              </p>
            </div>
          </div>

          {/* Product Cards Section */}
          <div className="col-md-4">
            <div className="row g-3">
              <div className="col-6">
                <div
                  className="p-2 border border-warning text-center d-flex flex-column"
                  style={{ backgroundColor: "#eec14c" }}
                >
                  <img
                    src={pdata.dietcardimages[0]}
                    className="img-fluid mb-2"
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                    alt="Dog food"
                  />
                  <h6 className="fs-6">{pdata.cardT[0]}</h6>
                  <button
                    className="btn fw-bold mt-2"
                    style={{ backgroundColor: "#ff7a3d" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="col-6">
                <div
                  className="p-2 border border-warning text-center d-flex flex-column"
                  style={{ backgroundColor: "#eec14c" }}
                >
                  <img
                    src={pdata.dietcardimages[1]}
                    className="img-fluid mb-2"
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                    alt="Dog food"
                  />
                  <h6 className="fs-6">{pdata.cardT[1]}</h6>
                  <button
                    className="btn fw-bold mt-2"
                    style={{ backgroundColor: "#ff7a3d" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="col-6">
                <div
                  className="p-2 border border-warning text-center d-flex flex-column"
                  style={{ backgroundColor: "#eec14c" }}
                >
                  <img
                    src={pdata.dietcardimages[2]}
                    className="img-fluid mb-2"
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                    alt="Dog food"
                  />
                  <h6 className="fs-6">{pdata.cardT[2]}</h6>
                  <button
                    className="btn fw-bold mt-2"
                    style={{ backgroundColor: "#ff7a3d" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="col-6">
                <div
                  className="p-2 border border-warning text-center d-flex flex-column"
                  style={{ backgroundColor: "#eec14c" }}
                >
                  <img
                    src={pdata.dietcardimages[3]}
                    className="img-fluid mb-2"
                    style={{ maxHeight: "100px", objectFit: "contain" }}
                    alt="Dog food"
                  />
                  <h6 className="fs-6">{pdata.cardT[3]}</h6>
                  <button
                    className="btn fw-bold mt-2"
                    style={{ backgroundColor: "#ff7a3d" }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex flex-column flex-md-row align-items-center">
          {/* Text & Cards */}
          <div className="col-12 col-md-6">
            <div className="row">
              <div>
                <h1>Training</h1>
                {pdata.training.split("\n").map((line, index) => (
                  <p className="" style={{ fontWeight: "600" }} key={index}>
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Cards Row */}
            <div className="row d-flex justify-content-md-between g-3">
              <div
                className="col-12 col-sm-5 col-lg-3 text-center"
                style={{ backgroundColor: "#eec14c", padding: "10px" }}
              >
                <img
                  src={pdata.trainingGadgets[0]}
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
                className="col-12 col-sm-5 col-lg-3 text-center"
                style={{ backgroundColor: "#eec14c", padding: "10px" }}
              >
                <img
                  src={pdata.trainingGadgets[1]}
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
                className="col-12 col-sm-5 col-lg-3 text-center"
                style={{ backgroundColor: "#eec14c", padding: "10px" }}
              >
                <img
                  src={pdata.trainingGadgets[2]}
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
          </div>

          {/* Image */}
          <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
            <img src={pdata.cornerimge} className="img-fluid" alt="Husky" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 m-auto d-flex justify-content-center">
            <div
              className="grooming-section"
              style={{
                backgroundImage: `url(${pdata.midbanner})`,
                objectFit: "contain",
                width: "1000px",
                height: "250px",
              }}
            >
              <div className="overlay mid-banner-overly">
                <h2 className="text-white">Grooming</h2>
                {pdata.groomingContent.split("\n").map((line, index) => {
                  return (
                    <p className="text-white fs-5 ms-5 mb-2" key={index}>
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row d-flex flex-column flex-md-row align-items-start">
          {/* Left Text Content */}
          <div className="col-md-7 col-12">
            <div className="mt-5">
              <h5>
                <strong>1. Brush and bath</strong>
              </h5>
              {pdata.brushandbathcontent.split("\n").map((line, index) => {
                return (
                  <p className="fs-5" key={index}>
                    {line}
                  </p>
                );
              })}
            </div>
            <div className="" style={{ marginTop: "150px" }}>
              <h5>
                <strong>2. Dental care</strong>
              </h5>
              {pdata.detalcontent.split("\n").map((line, index) => {
                return (
                  <p className="fs-5" key={index}>
                    {line}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Right Card Content */}
          <div className="col-md-5 col-12">
            <div className="row g-3 mt-4 mt-md-0 justify-content-center">
              {/* Card 1 */}
              <div className="col-md-5 col-11">
                <div
                  className="card text-center border-0 shadow-sm"
                  style={{ backgroundColor: "#facc15" }}
                >
                  <img
                    src={pdata.brush}
                    className="card-img-top p-3 img-fluid"
                    alt="Brushes"
                  />
                  <div className="card-body">
                    <p className="card-text fw-medium">
                      {pdata.traingGadgetstittle[0]}
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
                    src={pdata.sampo}
                    className="card-img-top p-3 img-fluid"
                    alt="Brushes"
                    style={{ height: "120px" }}
                  />
                  <div className="card-body">
                    <p className="card-text fw-medium">
                      {pdata.traingGadgetstittle[1]}
                    </p>
                    <button className="btn btn-danger">Add to Cart</button>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-11">
                <div
                  className="card text-center border-0 shadow-sm"
                  style={{ backgroundColor: "#facc15" }}
                >
                  <img
                    style={{ height: "100px" }}
                    src={pdata.detalcareimage}
                    className="card-img-top p-2 img-fluid"
                    alt="Dental care"
                  />
                  <div className="card-body">
                    <p className="card-text fw-medium">
                      {pdata.traingGadgetstittle[2]}
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

export default Husky;
