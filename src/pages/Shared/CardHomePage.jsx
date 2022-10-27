import React from "react";
import { Link } from "react-router-dom";

const CardHomePage = ({ data }) => {
  const { image_url, name, details } = data;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="banner not found" className="h-[200px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{details?.slice(0, 150)}...</p>
          <div className="card-actions justify-end">
            <Link to='/categories/all'>
              <div className="badge badge-outline">See</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHomePage;
