import React from "react";
import FastDel from "../Images/delivery-truck.gif";
import Rate from "../Images/rate.gif";
import HappyClient from "../Images/happy-client.gif";
import TwentyFour from "../Images/twenty-four.gif";

const CustomerSat = () => {
  return (
    <>
      <div className="container p-4 my-5">
        <div className="row">
          <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center gap-2 flex-column-reverse text-center p-4">
            <div>
              <h2 className="fs-5 fs-lg-4 text-black fw-medium">
                Fast Delivery
              </h2>
            </div>
            <div>
              <img src={FastDel} alt="" className="w-50" />
            </div>
          </div>
          <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center gap-2 flex-column-reverse text-center p-4">
            <div>
              <h2 className="fs-5 fs-lg-4 text-black fw-medium">
                3 Star Rating
              </h2>
            </div>
            <div>
              <img src={Rate} alt="" className="w-50" />
            </div>
          </div>
          <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center gap-2 flex-column-reverse text-center p-4">
            <div>
              <h2 className="fs-5 fs-lg-4 text-black fw-medium">
                Happy Clients
              </h2>
            </div>
            <div>
              <img src={HappyClient} alt="" className="w-50" />
            </div>
          </div>
          <div className="col-lg-3 col-6 d-flex justify-content-center align-items-center gap-2 flex-column-reverse text-center p-4">
            <div>
              <h2 className="fs-5 fs-lg-4 text-black fw-medium">24H Support</h2>
            </div>
            <div>
              <img src={TwentyFour} alt="" className="w-50" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSat;
