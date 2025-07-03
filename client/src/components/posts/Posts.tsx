import Post from "../post/Post";
import "./posts.scss"
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import type { PostType } from '../post/Post';

const Posts = ({ userId }: { userId?: string | number }) => {
  const url = userId ? `/posts?userId=${userId}` : "/posts";
  const { isLoading, error, data } = useQuery<PostType[]>({
    queryKey: ["posts", userId],
    queryFn: () => makeRequest.get(url).then(res => res.data),
  });

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error loading posts.</div>;
  }

  return (
    <div className="posts">
      {data?.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
