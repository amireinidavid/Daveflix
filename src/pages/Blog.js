import React from "react";
import Breadcrum from "../components/Breadcrum";
import Meta from "../components/Meta";

function Blog() {
  return (
    <>
      <Meta title={"Blog Page"} />
      <Breadcrum title="Blogs" />
    </>
  );
}

export default Blog;
