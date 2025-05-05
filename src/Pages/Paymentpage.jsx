import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
import Paymentpop from "./paymentpop";

export default function Paymentpage() {
  const { id } = useParams();
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setform] = useState(true);
  const [show, setshow] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("/data/db.json");
        const allProducts = Object.values(response.data).flat();
        const product = allProducts.find(
          (item) => String(item.id) === String(id)
        );

        if (product) {
          setPayment(product);
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

  const handelpop = (e) => {
    e.preventDefault();
    setshow(!show);
  };

  if (loading) return <div className="container mt-5">Loading...</div>;
  if (error) return <div className="container mt-5 text-danger">{error}</div>;
  if (!payment) return <div className="container mt-5">Product not found</div>;

  return (
    <>
      <Paymentpop show={show} onClose={() => setshow(false)}></Paymentpop>

      <div className="container-fluid" style={{ marginTop: "125px" }}>
        <h1>{payment.title}</h1>
        <div className="row align-items-center justify-c ontent-between">
          <div className=" col-5 text-center">
            <img src={payment.image} alt={payment.name} width="300" />
            <p className="fw-bold fs-5">
              Veko KTC Yum Tablet Dewormer for Dogs,<br></br> (pack of 4
              Tablets)
            </p>
            <p>Price: ₹{payment.price}</p>
          </div>

          {form && (
            <Container className="col-12 col-md-6 py-4">
              <h2 className="mb-4">Details</h2>

              <Form>
                <Form.Group className="mb-2">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email id" />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Phone no</Form.Label>
                  <Form.Control type="tel" placeholder="Enter Phone number" />
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your address"
                  />
                </Form.Group>

                <button
                  onClick={() => setform(!form)}
                  className=" btn mb-3"
                  style={{ backgroundColor: "#EEC14C", margin: "10px 250px" }}
                >
                  Payment
                </button>
              </Form>
            </Container>
          )}
          {!form && (
            <Container className="col-12 col-md-6 py-4">
              <h2 className="mb-4">Payment</h2>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="radio"
                    id="onlinePayment"
                    label="Online Payment"
                    name="paymentMethod"
                    className="fs-5"
                  />
                </Form.Group>

                <div className="ms-4 mb-3 d-flex">
                  <Form.Check
                    type="radio"
                    id="creditCard"
                    label="Credit Card"
                    name="paymentMethod"
                    className="mb-2 me-2"
                  />
                  <Form.Check
                    type="radio"
                    id="debitCard"
                    label="Debit Card"
                    name="paymentMethod"
                    className="mb-2 me-2"
                  />
                  <Form.Check
                    type="radio"
                    id="upi"
                    label="UPI"
                    name="paymentMethod"
                    className="ms-2 mb-2"
                  />
                </div>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="radio"
                    id="cod"
                    label="Cash On Delivery"
                    name="paymentMethod"
                    className="fs-5"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="radio"
                    id="netBanking"
                    label="Net Banking"
                    name="paymentMethod"
                    className="fs-5"
                  />
                </Form.Group>
                <button
                  onClick={handelpop}
                  className="btn ms-5 mt-2"
                  style={{ backgroundColor: "#EEC14C" }}
                >
                  Payment
                </button>
              </Form>
            </Container>
          )}
        </div>
      </div>
    </>
  );
}
