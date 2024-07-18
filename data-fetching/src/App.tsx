import { ReactNode, useEffect, useState } from "react";
import fetchingImg from './assets/data-fetching.png';
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import ErrorMessage from "./components/ErrorMessage";
import { get } from "./util/http";

type RawDataBlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const posts = (await get("https://jsonplaceholder.typicode.com/posts")) as RawDataBlogPost[];
        setFetchedPosts(posts.map(rawPost => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body
          }
        }));

      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsFetching(false);
    }

    fetchPosts();

  }, []);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />;
  }
  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }
  if (isFetching) {
    content = <p id='loading-fallback'>Loading...</p>;

  }

  return <main>
    <img src={fetchingImg} alt="An ab" />
    {content}
  </main>
}

export default App;
