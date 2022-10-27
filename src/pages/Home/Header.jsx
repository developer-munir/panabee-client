import React from "react";
import { Link } from "react-router-dom";
import asset2 from "../../assets/assest-2.png";
import TypeWriter from "react-typewriter";

const Header = () => {
  return (
    <div>
      <div className=" text-center bg-slate-100 leading-6">
        <div className="p-3">
          <h1 className=" md:text-2xl font-bold">
            <TypeWriter typing={1}>
              Achieve the Best Result with Panabee
            </TypeWriter>
          </h1>
          <p>
            Everything is a learning process: any time you fall over, it's just
            teaching you to stand up the next time.
          </p>
          <div className="mt-2">
            <Link to="/categories/all">
              <button className="bg-[#5A20CB] text-[#CAD5E2] mr-2 p-2 rounded-md">
                Apply now
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-[#5A20CB] text-[#CAD5E2] mr-2 p-2 rounded-md">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <img src={asset2} alt="" data-aos="fade-left" />
      </div>
    </div>
  );
};

export default Header;
