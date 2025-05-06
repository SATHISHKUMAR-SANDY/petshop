import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/styles/DproductD"

function ProductDetails() {
  const { id } = useParams();
  const [pdetail, setpdetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const navigate  = useNavigate()

 useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("/data/db.json");
  
        // Flatten the nested products from categories
        const allProducts = Object.values(response.data).flat();
        const product = allProducts.find((item) => String(item.id) === String(id));
  
        if (product) {
          setpdetail(product);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Failed to fetch product");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [id]);
  

  if (loading) return <div className="container mt-5">Loading...</div>;
  if (error) return <div className="container mt-5 text-danger">{error}</div>;
  if (!pdetail) return <div className="container mt-5">Product not found</div>;

  return (
    <>
      <div className="container-fluid" style={{ marginTop: "200px" }}>
        <h1 className="p-head ms-5">{pdetail?.title || "Dog Tasty Bone"}</h1>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-6">
            <p className="fw-bold fs-5">
              Veko KTC Yum Tablet Dewormer for Dogs (pack of 4 Tablets)
            </p>
            <p className="fw-bold ms-5">Rs.860</p>

            <div className="mt-5">
              <div className="btn" style={{ backgroundColor: "#FF7A51" }}>
                Add to Cart
              </div>
              <div
                className=" ms-5 btn"
                style={{ backgroundColor: "#B2977C", padding: "7px 20px" }}
               onClick={()=>navigate(`/payment/${pdetail.id}`)}  >
                Buy Now
              </div>
            </div>
          </div>
          <div className="col-4">
            {pdetail && <img src={pdetail.image} alt="Product" />}
            <CiHeart size={40} className="wish" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="ms-5">
          <h5>&bull; Description</h5>
          <p className="fw-bold fs-5">
            KTD XL Yum Deworming Tablets for Dogs is a broad-spectrum dewormer
            for large dogs. They effectively expel intestinal
            <br />
            nematodes and cestodes, leading to good health. This treatment
            against worms in dogs prevents gastrointestinal problems
            <br />
            and parasite infections. Easy-to-use chewable tablets render
            deworming effective and hassle-free. Maintain your dog
            <br />
            healthy, active, and worm-free with KTD XL Yum Tablets!
          </p>
        </div>

        <div className="ms-5">
          <h5>
            KTD XL Yum-Tab for Dogs contains three different ingredients having
            different modes of action & different spectra of
            <br />
            activity
          </h5>
          <ul>
            <li className="fw-bold fs-5">
              Pyramtel & Febantel act against all relevant nematodes (ascardis,
              hookworms & whipworms) in dogs.
            </li>
            <li className="fw-bold fs-5">
              Eradicates intestinal worms such as nematodes and cestodes
              efficiently.
            </li>
            <li className="fw-bold fs-5">
              Offers broad-spectrum protection against frequent parasites in big
              dogs.
            </li>
            <li className="fw-bold fs-5">
              Maintains a healthy digestive system by averting worm-related
              problems.
            </li>
          </ul>
        </div>

        <div className="ms-5">
          <h5>Directions for use:</h5>
          <ol>
            <li className="fw-bold fs-5">
              Dosage: Take the tablet according to your dog's weight and
              veterinarian advice.
            </li>
            <li className="fw-bold fs-5">
              Direct Oral Administration: Administer the tablet orally into your
              dog's mouth or mix it with food.
            </li>
            <li className="fw-bold fs-5">
              Ensure Proper Intake: In case of mixing with food, ensure your dog
              swallows the complete dose.
            </li>
            <li className="fw-bold fs-5">
              Deworming Schedule:
              <ul>
                <li>
                  Puppies: 2 weeks interval until 12 weeks old, then monthly
                  until 6 months old
                </li>
                <li>
                  Adult Dogs: 3-6 months interval or as directed by your
                  veterinarian.
                </li>
                <li>
                  Pregnant/Lactating Dogs: Ask a veterinarian for the proper
                  schedule.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
