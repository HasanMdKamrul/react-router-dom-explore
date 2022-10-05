import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
    const navigate = useNavigate();
  const { userId, body, title } = useLoaderData();

  const handleAuthor = ()=>{
    navigate(`/author/${userId}`)
  }

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <button onClick={()=> handleAuthor()} className="btn">Author</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
