import React from "react";

const SingleBlog = ({ blog: { title, body } }) => {

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body.length > 50 ? body.slice(0, 50) : body}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default SingleBlog;
