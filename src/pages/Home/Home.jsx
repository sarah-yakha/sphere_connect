import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CardPost } from "../../components/CardPost/CardPost";
import { getDatabase, onValue, ref } from "firebase/database";

export const Home = () => {
  const postsFromStore = useSelector((state) => state.post.array); // Посты из Redux
  const [posts, setPosts] = useState([]); // Локальное состояние для постов

  useEffect(() => {
    const db = getDatabase();
    const postDataBase = ref(db, "post");
  
    onValue(postDataBase, (snapshot) => {
      const firebasePosts = snapshot.val() || [];
      setPosts([...postsFromStore, ...firebasePosts]); // Объединяем посты из Redux и Firebase
    });
  }, [postsFromStore]); 

  return (
    <div className="container">
      {posts.length > 0 ? (
        posts.map((post) => (
          <CardPost key={post.id} post={post} /> // Рендерим каждый пост
        ))
      ) : (
        <p>No posts yet</p>
      )}
    </div>
  );
};
