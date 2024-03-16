import React, { memo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const initialVal = {
  userName: "",
  userEmail: "",
  userMessage: "",
};
const Contact = () => {
  const [ContactDetails, setContactDetails] = useState(initialVal);
  const [StoreDetails, setStoreDetails] = useState([]);

  const changeDetails = (e) => {
    setContactDetails({
      ...ContactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitDetails = (e) => {
    e.preventDefault();
    if (ContactDetails.userEmail.trim() == "") {
      alert("Email Must Be Fill");
      return;
    }
    // Create a new object with a timestamp as a key and ContactDetails as the value
    const newDetails = { timestamp: Date.now(), data: ContactDetails };

    // Update StoreDetails by adding the newDetails object to the existing array
    setStoreDetails((prevDetails) => [...prevDetails, newDetails]);

    // Reset ContactDetails to clear the form fields
    setContactDetails(initialVal);
  };

  return (
    <div className="container-fluid p-0 ">
      <div className="about-sec container-fluid text-center py-5">
        <h1 className="text-white fs-70">Contact Us</h1>
        <div className="m-auto my-5" style={{ maxWidth: "65px" }}>
          <div className="border-green"></div>
        </div>
      </div>
      <div className="container p-5 d-flex flex-column justify-content-center align-items-center ">
        <div className="d-flex flex-column justify-content-center align-items-center w-100  p-md-5">
          <h2 className="text-center">Contact Form</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            perferendis
          </p>
          <div className="contact-inps">
            <form
              action="cont-form"
              className=" d-flex flex-column justify-content-center align-items-start gap-3"
            >
              <div className="border border-2 border p-2 d-flex justify-content-between align-items-center w-100">
                <input
                  type="text"
                  value={ContactDetails.userName}
                  name="userName"
                  placeholder="Enter Name:"
                  className="text-black bg-transparent border-0 inp w-100"
                  onChange={changeDetails}
                />
              </div>
              <div className="border border-2 border p-2 d-flex justify-content-between align-items-center w-100">
                <input
                  type="email"
                  value={ContactDetails.userEmail}
                  name="userEmail"
                  placeholder="Enter Email:"
                  className="text-black bg-transparent border-0 inp w-100"
                  onChange={changeDetails}
                />
              </div>
              <div className="border border-2 border p-2 d-flex justify-content-between align-items-center w-100">
                <textarea
                  value={ContactDetails.userMessage}
                  className="text-black bg-transparent border-0 inp w-100"
                  name="userMessage"
                  cols="40"
                  rows="4"
                  placeholder="Enter Message:"
                  onChange={changeDetails}
                ></textarea>
              </div>

              <div className="text-black d-inline-flex flex-row justify-content-between align-items-center w-100 flex-wrap gap-2">
                <input
                  className="main-btn rounded-5 border p-2 text-white main-btn"
                  type="submit"
                  value="Submit Now"
                  onClick={submitDetails}
                />
                <h5 className="m-0 ">
                  <FontAwesomeIcon icon={faMobile} className="location" />
                  <span className="fs-16 ms-2">+92 0234 456</span>
                </h5>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
