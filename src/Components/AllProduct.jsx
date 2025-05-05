import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import dogbanner from "../assets/images/dogbanner.png";
import ecclip1 from "../assets/images/Ellipse 1.png";
import ecclip2 from "../assets/images/Ellipse 2.png";
import ecclip3 from "../assets/images/Ellipse 3.png";
import ecclip4 from "../assets/images/Ellipse 4.png";

function AllProduct() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Banner */}
      <div className="containerxl">
        <img src={dogbanner} className="img-fluid w-100" alt="Dog Banner" />
      </div>

      {/* Category Navigation */}
      <div className="container">
        <div className="row my-4">
          <div className="col text-center" role="button" onClick={() => navigate("preventivicare")}>
            <img src={ecclip1} className="img-fluid" alt="Preventive Care" />
            <h5 className="p-1">Preventive Care</h5>
          </div>
          <div className="col text-center" role="button" onClick={() => navigate("helathCare")}>
            <img src={ecclip2} className="img-fluid" alt="Health Care" />
            <h5 className="p-1">Health Care</h5>
          </div>
          <div className="col text-center" role="button" onClick={() => navigate("FeedingEssentials")}>
            <img src={ecclip3} className="img-fluid" alt="Dental Care" />
            <h5 className="p-1">Dental Care</h5>
          </div>
          <div className="col text-center" role="button" onClick={() => navigate("EverydayEssential")}>
            <img src={ecclip4} className="img-fluid" alt="Grooming" />
            <h5 className="p-1">Grooming</h5>
          </div>
        </div>
      </div>

      {/* Render child routes */}
      <Outlet />
    </div>
  );
}

export default AllProduct;
