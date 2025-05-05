import React from "react";
import Swal from 'sweetalert2'
import "../assets/styles/paymentpop.css";
import { Container, Form } from "react-bootstrap";
function Paymentpop({ show, onClose }) {

const handelsub = (e)=>{
e.preventDefault()
Swal.fire({
    title: " Payment Success",
    text: " Thank you for shopping with us!",
    icon: "success"
  });
}


  if (!show) return <h1>nppppp</h1>;
  return (
    <div className="modal d-block" tabIndex="-1" style={{width:"500px",margin:"20px 500px"}}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div
          className="modal-content p-4 rounded-4 shadow-lg"
          style={{ backgroundColor: "#FF7F50" }}
        >
          {/* Header */}
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <Container>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Enter your Card number</Form.Label>
                <Form.Control type="text" placeholder="Card Number" />
              </Form.Group>
            <div className="d-flex justify-content-between">
            <Form.Group className="mb-2  ">
                <Form.Label>Exper Yesr</Form.Label>
                <Form.Control type="text" placeholder="mm/yy" />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Cvv</Form.Label>
                <Form.Control type="text" placeholder="cvv" />
              </Form.Group>

            </div>
            <button className="btn" onClick={handelsub} style={{backgroundColor:"#EEC14C",margin:"40px 130px"}} >Payment</button>
            </Form>
          </Container>
          {/* You can add more modal-body content here */}
        </div>
      </div>
    </div>
  );
}

export default Paymentpop;
