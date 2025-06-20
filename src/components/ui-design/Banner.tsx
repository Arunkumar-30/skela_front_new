"use client";

import Link from "next/link";
import TrustedPartner from "./trustedPartner";
import CircleComponent from "./circle";

const BannerComponent = () => {
  return (
    <>
      {/* <div className="container  relative mx-auto h-[800px]"> */}

      <div className="">

        <div className="mt-70 lg:mt-0 mx-12 md:mx-0">
          <div className="py-16 mx-auto">
            <div className="flex flex-col justify-center gap-10 mt-32">
              <h1 className="text-5xl tracking-wide font-medium">
                Your Global <br />
                Dream Starts Here
              </h1>
            </div>
          </div>
          <div className=" mx-auto">
            <ul className="flex gap-20">
              <li className="relative">
                <div>
                  <h4 className="font-bold text-2xl">15000+</h4>
                  <p className="text-lg">students trained</p>
                </div>
                <span className="circle-bord  "></span>
              </li>
              <li>
                <div>
                  <p className="text-lg">pick from</p>
                  <h4 className="font-bold text-2xl">80000+ courses</h4>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex mt-5 lg:mt-16 mx-12 md:mx-0">
            <Link href="#" className="circle-btn">
              Lets’s The Action Plan{" "}
            </Link>
          </div>

        </div>



        {/* banner section */}
        <div className=" " >

          <div className="  ">
            <CircleComponent />
          </div>

          <div className="mt-4 mx-2 md:mx-0 mb-2 md:mb-0">
            <TrustedPartner />
          </div>

        </div>

      </div>

      {/* </div> */}
    </>
  );
};

export default BannerComponent;
