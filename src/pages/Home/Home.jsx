import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const posts = useSelector((state) => state.post.array);

  console.log(posts);

  return (
    <div>
      {posts.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </div>
  );
};
