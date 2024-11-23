import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";

export default function OfferCard() {
  return (
    <div
      className="offer-card flex-column"
      style={{ padding: "15px", gap: "10px" }}
    >
      <div className="card-img" style={{ width: "100%" }}>
        <img
          src="https://clinic-next-github.vercel.app/_next/image?url=%2Fmedia%2FDoctors%2F2.jpg&w=640&q=75"
          style={{ width: "100%" }}
        />
      </div>
      <div
        className="exp-date flex-between"
        style={{ width: "100%", color: "#188240", fontSize: "18px" }}
      >
        <span className="flex-center" style={{ gap: "5px" }}>
          <BsFillCalendarDateFill />
          2023-9-15
        </span>
        <span>ينتهي في</span>
      </div>
      <div
        className="card-text"
        style={{ direction: "rtl", fontSize: "20px", fontWeight: "bolder" }}
      >
        <p>
          اعمل <span style={{ color: "#217AD2" }}>Login</span> الان واحصل على
          400 نقطه وخصم بقيمة 5% على اول طلب
        </p>
      </div>
      <button
        style={{
          backgroundColor: "#217AD2",
          color: "#fff",
          border: "none",
          borderRadius: "40px",
          padding: "10px 15px",
          alignSelf: "flex-end",
        }}
      >
        Login
      </button>
    </div>
  );
}
