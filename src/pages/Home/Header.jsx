import React from "react";
import asset2 from "../../assets/assest-2.png";
const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${asset2})`,
        backgroundSize: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" text-center bg-slate-100 leading-6">
        <div className="p-3">
          <h1 className=" md:text-2xl font-bold">
            Achieve the Best Result with Panabee
          </h1>
          <p>
            Everything is a learning process: any time you fall over, it's just
            teaching you to stand up the next time.
          </p>
          <div className="mt-2">
            <button className="bg-[#5A20CB] text-[#CAD5E2] mr-2 p-2 rounded-md">
              Apply now
            </button>
            <button className="bg-[#5A20CB] text-[#CAD5E2] mr-2 p-2 rounded-md">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
