import React from "react";
import Navbar from "../Components/Navbar"; // Make sure Navbar path is correct
import Banner from "../assets/images/Variant4.png"; // Make sure this path is correct
import DogExploree from "../assets/images/Rectangle 8.png";
import DogExploree1 from "../assets/images/Rectangle 19.png";
import DogExploree2 from "../assets/images/Rectangle 12.png";
import DogExploree3 from "../assets/images/Rectangle 14.png";
import { useNavigate } from "react-router-dom";
import ShopBypet1 from "../assets/images/Rectangle 31.png";
import ShopBypet2 from "../assets/images/Rectangle 32.png";
import ShopBypet3 from "../assets/images/Rectangle 34.png";
import ShopBypet4 from "../assets/images/Rectangle 35.png";
import ShopBypet5 from "../assets/images/Rectangle 36.png";
import ShopBypet6 from "../assets/images/Rectangle 41.png";
import ShopBypet7 from "../assets/images/Rectangle 40.png";
import ShopBypet8 from "../assets/images/Rectangle 39.png";
import ShopBypet9 from "../assets/images/Rectangle 38.png";
import ShopBypet10 from "../assets/images/Rectangle 37.png";

import Elipse1 from  "../assets/images/Ellipse 17.png";
import Elipse2 from  "../assets/images/Ellipse 7.png";
import Elipse3 from  "../assets/images/Ellipse 14.png";
import Elipse4 from  "../assets/images/Ellipse 15.png";
import Elipse5 from  "../assets/images/Ellipse 8.png";
import Elipse6 from  "../assets/images/Ellipse 9.png";
import Elipse7 from  "../assets/images/Ellipse 16.png";
import Banner2 from  "../assets/images/petbar.png";
import "../assets/styles/Home.css";
import Consoltnow from "../Components/Consoltnow";
import Husky from "../Components/Husky";
import Button from "react-bootstrap/esm/Button";

function Home() {
  const navigate = useNavigate();

  const handleNavigate = (type) => {
    navigate(`/pet/${type}`);
  };

  return (
    < >
      <div className="w-100" style={{ marginTop: "150px" }}>
        <img src={Banner} className="img-fluid w-100 mt-3 mb-4" alt="Banner" />
      </div>

      {/* 🟡 Cards Container */}
      <div className="container me-5">
        <h1 className="text-center my-3">Explore Pets</h1>
        <div className="row justify-content-between">
          {/* 🔶 Card 1 */}
          <div className="col-md-2">
            <div
              className="card ExplorePets px-2 pt-2"
              role="button"
              onClick={() => navigate("/dog")}
            >
              <img src={DogExploree} className="card-img-top" alt="Dog" />
              <div className="card-body text-center">
                <h5 className="card-title">Dog</h5>
              </div>
            </div>
          </div>

          {/* 🔶 Card 2 */}
          <div className="col-md-2">
            <div
              className="card ExplorePets px-2 pt-2"
              role="button"
              onClick={() => navigate("/cat")}
            >
              <img src={DogExploree1} className="card-img-top" alt="Cat" />
              <div className="card-body text-center">
                <h5 className="card-title">Cat</h5>
              </div>
            </div>
          </div>

          {/* 🔶 Card 3 */}
          <div className="col-md-2">
            <div
              className="card ExplorePets px-2 pt-2"
              role="button"
              onClick={() => navigate("/fish")}
            >
              <img src={DogExploree2} className="card-img-top" alt="Fish" />
              <div className="card-body text-center">
                <h5 className="card-title">Fish</h5>
              </div>
            </div>
          </div>

          {/* 🔶 Card 4 */}
          <div className="col-md-2">
            <div
              className="card  ExplorePets px-2 pt-2"
              role="button"
              onClick={() => navigate("/bird")}
            >
              <img src={DogExploree3} className="card-img-top" alt="Bird" />
              <div className="card-body text-center">
                <h5 className="card-title">Bird</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
  <h1 className="  text-center p-5">Shop By PetStore</h1>

  {/* First Row */}
  <div className="row justify-content-center justify-content-md-between my-3">
    <div className="col-9  col-md-2  my-5 p-3 text-center custom-shopbyPetStore  ">
      <h5 className="text-center">Dog Food</h5>
      <img src={ShopBypet1} className="img-fluid" alt="Pet 1" />
    </div>
    <div className="col-9 my-5 col-md-2 p-3  text-center custom-shopbyPetStore ">
      <h5 className="text-center">Treats</h5>
      <img src={ShopBypet2} className="img-fluid" alt="Pet 2" />
    </div>
    <div className="col-9 my-5  col-md-2 p-3  text-center custom-shopbyPetStore ">
      <h5 className="text-center">Cat Litter</h5>
      <img src={ShopBypet3} className="img-fluid" alt="Pet 3" />
    </div>
    <div className="col-9 my-5  col-md-2  p-3 text-center custom-shopbyPetStore  ">
      <h5 className="text-center">Toys</h5>
      <img src={ShopBypet4} className="img-fluid" alt="Pet 4" />
    </div>
    <div className="col-9  my-5 col-md-2  p-3 text-center custom-shopbyPetStore  ">
      <h5 className="text-center">Grooming</h5>
      <img src={ShopBypet5} className="img-fluid" alt="Pet 5" />
    </div>
  </div>

  {/* Second Row */}
  <div className="row justify-content-center  justify-content-md-between  my-3">
    <div className="col-9  col-md-2  p-3 text-center custom-shopbyPetStore  my-5">
      <h5 className="text-center">Cat Food</h5>
      <img src={ShopBypet6} className="img-fluid" alt="Pet 6" />
    </div>
    <div className="col-9  col-md-2 p-3  text-center custom-shopbyPetStore  my-5">
      <h5 className="text-center">Bowls</h5>
      <img src={ShopBypet7} className="img-fluid" alt="Pet 7" />
    </div>
    <div className="col-9  col-md-2  p-3 text-center custom-shopbyPetStore  my-5">
      <h5 className="text-center">Walk Essentials</h5>
      <img src={ShopBypet8} className="img-fluid" alt="Pet 8" />
    </div>
    <div className="col-9  col-md-2 p-3  text-center custom-shopbyPetStore  my-5">
      <h5 className="text-center">Beds & Mats</h5>
      <img src={ShopBypet9} className="img-fluid" alt="Pet 9" />
    </div>
    <div className="col-9  col-md-2 p-3  text-center custom-shopbyPetStore  my-5">
      <h5 className="text-center">Fashion</h5>
      <img src={ShopBypet10} className="img-fluid" alt="Pet 10" />
    </div>
  </div>
</div>


<div className="container-fluid">
  <h2 className="text-center">Shop  by Breed</h2>

  <div className="row d-flex flex-column flex-md-row justify-content-md-between align-items-center m-4">
  <div className="col-12 col-md-1 text-center eclipeParent mb-3 mb-md-0" role="button" onClick={() => handleNavigate("husky")}>
    <img src={Elipse1} className="EclipseBorder rounded-circle img-fluid" />
    <h5 className="eclipsecontent p-2">Husky</h5>
  </div>
  <div className="col-12 col-md-1 text-center eclipeParent mb-3 mb-md-0" role="button" onClick={() => handleNavigate("pug")}>
    <img src={Elipse2} className="EclipseBorder rounded-circle img-fluid" />
    <h5 className="eclipsecontent p-2">Pug</h5>
  </div>
  <div className="col-12 col-md-1 text-center eclipeParent mb-3 mb-md-0" role="button" onClick={() => navigate("/catp")}>
    <img src={Elipse3} className="EclipseBorder rounded-circle img-fluid" />
    <h5 className="eclipsecontent p-2">Cat</h5>
  </div>
  <div className="col-12 col-md-1 text-center eclipeParent mb-3 mb-md-0">
    <img src={Elipse4} className="EclipseBorder rounded-circle img-fluid" />
    <h5 className="eclipsecontent p-2">Husky</h5>
  </div>
  <div className="col-12 col-md-1 text-center eclipeParent mb-3 mb-md-0">
    <img src={Elipse5} className="EclipseBorder rounded-circle img-fluid" />
    <h5 className="eclipsecontent p-2">Husky</h5>
  </div>
  <div className="col-12 col-md-1 text-center eclipeParent mb-3 mb-md-0">
    <img src={Elipse6} className="EclipseBorder rounded-circle img-fluid" />
    <h5 className="eclipsecontent p-2">Husky</h5>
  </div>
  <div className="col-12 col-md-1 text-center eclipeParent">
    <img src={Elipse7} className="EclipseBorder rounded-circle img-fluid" />
    <h5 className="eclipsecontent p-2">Husky</h5>
  </div>
</div>


</div>

<Consoltnow></Consoltnow>

<img src={Banner2} className="img-fluid my-3" ></img>

    </>


  );
}

export default Home;
