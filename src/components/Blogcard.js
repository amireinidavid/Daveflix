import React from "react";
import { Link } from "react-router-dom";

function Blogcard() {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" id="1" className="img-fluid" alt="" />
        </div>
        <div className="blog-content">
          <p className="date">1 april, 2024</p>
          <h5 className="title">A beautiful Sunday morning</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            maiores blanditiis odio quaerat explicabo, quibusdam aliquam ducimus
          </p>
          <Link to="info" className="button">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
