import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContexts/AuthProvider';

const Card = ({ course }) => {
  // console.log(course);
  const { framework, image_url, details, title, _id } = course;
  // console.log(course._id);
  const { handleDetails } = useContext(AuthContext);
  return (
    <div data-aos="zoom-out-up">
      <div className="card w-full glass">
        <figure>
          <img src={image_url} alt="car!" className="h-[300px] w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{framework}</h2>
          <p>{title}</p>
          <p className="font-thin text-blue-400">
            {details.slice(0, 100) + "..."}
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`/seeDetails/${_id}`}
              onClick={() => handleDetails(course)}
            >
              <button className="btn btn-primary">Learn now!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;