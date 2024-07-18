import { ReactNode, useEffect, useState } from "react";
import fetchingImg from './assets/data-fetching.png';
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import { get } from "./util/http";

type RawDataBlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();


  useEffect(() => {
    async function fetchPosts() {
      const posts = (await get("https://jsonplaceholder.typicode.com/posts")) as RawDataBlogPost[];
      setFetchedPosts(posts.map(rawPost => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body
        }
      }));
    }

    fetchPosts();

  }, []);

  let content: ReactNode;
  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return <main>
    <img src={fetchingImg} alt="An ab" />
    {content}
  </main>
}

export default App;
