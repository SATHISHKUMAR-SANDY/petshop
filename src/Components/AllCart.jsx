import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function AllCart() {
  const [users, setUsers] = useState([]);
  const { category } = useParams();
 const navigate  = useNavigate()

  useEffect(() => {
    axios
      .get("/data/db.json")
      .then((response) => {
        const data = response.data[category];
        setUsers(data || []); // Fallback to empty array if category not found
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setUsers([]); // Empty on error
      });
  }, [category]);

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center text-capitalize">{category}</h2>
      <div className="row gy-4">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index} onClick={()=>navigate(`/Productlist/${user.id}`)} >
              <div className="card h-100 p-2"style={{backgroundColor:"#EEC14C"}} >
                <img src={user.image} className="card-img-top" alt={user.title} />
                <div className="card-body"style={{backgroundColor:"#EEC14C"}}>
                  <h5 className="card-title">{user.title}</h5>
                  <p className="card-text">Price: ₹{user.price}</p>
                  <a href="#" className="btn  w-100" style={{backgroundColor:"#FF7A51"}} >
                    Add Cart
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center">No products available for this category.</h4>
        )}
      </div>
    </div>
  );
}
