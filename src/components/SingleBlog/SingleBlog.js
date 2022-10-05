import React from "react";
import { useNavigate } from "react-router-dom";

const SingleBlog = ({ blog: { title, body, id } }) => {
    const navigate = useNavigate();

    const detailsHandler = ()=> {
        navigate(`details/${id}`)
    }

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body.length > 50 ? body.slice(0, 50) : body}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=> detailsHandler()} className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>

    );
};

export default SingleBlog;
