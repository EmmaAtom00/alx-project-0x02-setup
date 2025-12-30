import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import React, { useEffect, useState } from "react";

interface PostsPageProps {
  posts: PostProps[];
}

const posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header />
      {loading ? (
        <p className="p-8">Loading posts...</p>
      ) : (
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Posts</h1>
          {posts.length === 0 ? (
            <p>No posts available.</p>
          ) : (
            posts.map((post, index) => (
              <PostCard
                key={index}
                title={post.title}
                content={post.content}
                userId={post.userId}
              />
            )))}
          </div>
        )}
        </>
    )}; 


export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const posts: PostProps[] = data.map((post: any) => ({
      title: post.title,
      content: post.body,
      userId: post.userId,
    }));

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    // console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default posts;
