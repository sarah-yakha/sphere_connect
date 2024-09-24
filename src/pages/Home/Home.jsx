import React from "react";
import { useSelector } from "react-redux";

import { CardPost } from "../../components/CardPost/CardPost";

export const Home = () => {
  const posts = useSelector((state) => state.post.array);

  return (
    <>
      <div className="container">
        {posts.map((item) => (
          <CardPost item={item} />
        ))}
      </div>
    </>
  );
};
