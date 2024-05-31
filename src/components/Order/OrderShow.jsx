/** @format */

import React from "react";
import { useSelector } from "react-redux";

const OrderShow = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const userOrders = useSelector(
    (state) =>
      state.user.users.find((u) => u.email === currentUser)?.userOrders,
  );

  if (!currentUser) {
    return <div className="text-center">No User Signed Up</div>;
  }

  if (!userOrders || userOrders.length === 0) {
    return <div className="text-center">No Orders Found</div>;
  }

  return (
    <div className="order-container">
      {userOrders.map((order, index) => (
        <div key={index} className="order">
          <div
            className=" container border mt-3 d-flex flex-column align-items-center w-100"
            style={{ background: "#F8F9FA" }}>
            <h3 className="text-center fw-bold mt-2">Order {index + 1}</h3>
            {Array.isArray(order) ? (
              order.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="row my-4 flex-wrap justify-content-center align-items-center w-100 gap-2 cartItem rounded  position-relative ">
                  <div className="col-lg-2 col-12 d-flex justify-content-center align-items-center p-0">
                    <img
                      src={item.product.ImgPath}
                      alt={item.product.heading}
                      width={"100%"}
                      height={"100px"}
                      style={{ objectFit: "cover" }}
                      className="rounded cartIProdmage"
                    />
                  </div>
                  <div className="col-lg-2 col-12 d-flex justify-content-center  align-items-center fw-bold fs-5 text-center">
                    {item.product.heading}
                  </div>
                  <div className="col-lg-2 col-12 d-flex justify-content-center align-items-center fw-bold fs-14">
                    Price: {item.product.price}
                  </div>
                  <div className="col-lg-2 col-12 d-flex justify-content-center   align-items-center fw-bold ">
                    Quantity: {item.amount}
                  </div>
                  <div className="col-lg-2 col-12 d-flex justify-content-center  align-items-center fw-bold fs-14">
                    Total Price: {item.amount * item.product.price}
                  </div>
                </div>
              ))
            ) : (
              <div className="row justify-content-between m-auto my-2 align-items-center w-100">
                <div className="col-md-2 col-12 p-0">
                  <img
                    src={order.product.ImgPath}
                    alt={order.product.heading}
                    width={"100%"}
                    height={"100px"}
                    style={{ objectFit: "cover" }}
                    className="rounded cartIProdmage"
                  />
                </div>
                <div className="col-md-2 col-12 d-flex justify-content-center  align-items-center fw-bold fs-5 text-center mt-sm-0 mt-4">
                  {order.product.heading}
                </div>
                <div className="col-md-2 col-12 d-flex justify-content-center align-items-center fw-bold fs-14">
                  Price: {order.product.price}
                </div>
                <div className="col-md-2 col-12 d-flex justify-content-center   align-items-center fw-bold ">
                  Quantity: {order.quantity}
                </div>
                <div className="col-md-2 col-12 d-flex justify-content-center  align-items-center fw-bold fs-14 mb-sm-0 mb-4">
                  Total Price: {order.quantity * order.product.price}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderShow;
