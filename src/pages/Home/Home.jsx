import React from "react";
import { useSelector } from "react-redux";

import { CardPost } from "../../components/CardPost/CardPost";

export const Home = () => {
  const posts = useSelector((state) => state.post.array);

  return (
    <>
      <div className="container">
        {posts.length > 0 ? (
          posts.map((post) => (
            <CardPost key={post.id} post={post} /> // Рендерим каждый пост
          ))
        ) : (
          <p>No posts yet</p>
        )}
      </div>
    </>
  );
};
