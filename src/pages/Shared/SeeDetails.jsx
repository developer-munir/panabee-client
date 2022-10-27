import jsPDF from "jspdf";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContexts/AuthProvider";

const SeeDetails = () => {
  const { seeDetails } = useContext(AuthContext);
  console.log(seeDetails);
  const { title, image_url, details, _id } = seeDetails;
  const downLoadPDF = () => {
    const documentPdf = new jsPDF("p", "pt", "a4");
    documentPdf.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
  };

  return (
    // bg-[#5A20CB] text-[#CAD5E2]
    <div className="grid justify-center ">
      <div
        className="max-w-xl text-gray-400 p-10 mt-6 mb-6 rounded-md shadow-md dark:bg-gray-900 bg-[#5A20CB] "
        id="content"
      >
        <div className="mt-6 mb-2 grid justify-end ">
          <button
            onClick={downLoadPDF}
            type="primary"
            className="inline-flex  items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md md:w-auto bg-[#CAD5E2] hover:bg-black hover:text-white  focus:shadow-outline focus:outline-none"
          >
            Download PDF
          </button>
        </div>
        <div className="mt-6 mb-2">
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
        </div>
        <img
          src={image_url}
          alt=""
          className="object-center w-full object-fill  rounded-md  dark:bg-gray-500"
        />

        <p className=" mt-5">{details}</p>

        <div className="mt-6 mb-2 grid justify-center">
          <Link to={`/premium/${_id}`}>
            <button className="inline-flex items-center  w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md md:w-auto bg-[#CAD5E2] hover:bg-black focus:shadow-outline focus:outline-none">
              Get Premium Access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeeDetails;
