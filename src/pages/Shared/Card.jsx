import React from 'react';

const Card = ({ course }) => {
  console.log(course);
  const { framework, image_url, details, title, total_view } = course;
  return (
    <div>
      <div className="card w-full glass">
        <figure>
          <img src={image_url} alt="car!" className='h-[300px] w-full' />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{framework}</h2>
          <p>{title}</p>
          <p className='font-thin text-blue-400'>{details.slice(0,100)+'...'}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;