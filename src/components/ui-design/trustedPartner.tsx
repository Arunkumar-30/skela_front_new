import React from "react";

const TrustedPartner = () => {
  return (
    <div className="slider-container">
      <div className="flex gap-2">
        <div className="flex justify-center items-center">
          <h1 className="font-medium text-xl text-[#0F2F64]">Partner with</h1>
        </div>
        <div
          className="slider max-w-2xl"
          style={
            {
              "--width": "150px",
              "--height": "100px",
              "--quantity": "4",
            } as React.CSSProperties
          }
        >
          <div className="list">
            <div
              className="item"
              style={{ "--position": 1 } as React.CSSProperties}
            >
              <img className="logo" src="/partner/partner-1.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": 2 } as React.CSSProperties}
            >
              <img className="logo" src="/partner/partner-1.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": 3 } as React.CSSProperties}
            >
              <img className="logo" src="/partner/partner-1.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": 4 } as React.CSSProperties}
            >
              <img className="h-50 " src="/partner/partner-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
