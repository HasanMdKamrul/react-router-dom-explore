import React from "react";
import { useLoaderData } from "react-router-dom";

const Author = () => {
  const { userName, email, phone } = useLoaderData();

  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{userName}</h2>
          <p>{email}</p>
          <small>{phone}</small>
        </div>
      </div>
    </div>
  );
};

export default Author;
