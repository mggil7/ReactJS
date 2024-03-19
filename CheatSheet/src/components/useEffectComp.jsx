import { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
      //console.log(result.data)
      setPosts(result.data);

      //console.log('posts',posts.message)
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
