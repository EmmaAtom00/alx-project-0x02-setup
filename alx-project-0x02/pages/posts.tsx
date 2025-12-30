import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import React, { useEffect, useState } from "react";

function posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        // Map data to match PostProps
        const formattedPosts = data.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <p className="p-8">Loading posts...</p>
      ) : (
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Posts</h1>
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default posts;
