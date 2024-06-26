
import { FiArrowLeft } from "react-icons/fi";
import CardList from "../components/posts/CardList";
import ViewUserBtn from "../components/posts/ViewUserBtn";
import Link from "next/link";

const Posts = async () => {
  const base_url = "https://jsonplaceholder.typicode.com/posts";

  interface Iposts {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const response = await fetch(base_url, {
    cache: "no-store"
  });
  const posts: Iposts[] = await response.json();


  return (
    <div className="container mx-auto mt-10">
      <div className="flex items-center mb-5">
        <Link href={"/"}>
        <button
          className="mr-3 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <FiArrowLeft className="w-6 h-6" />
        </button>
        </Link>
       
        <h1 className="text-3xl font-bold">Post Page</h1>
      </div>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <h1 className="text-xl font-bold">{post.title}</h1>
            <p className="text-gray-700">{post.body}</p>
            <ViewUserBtn userId={post.userId} />
          </CardList>
        );
      })}
    </div>
  );
};

export default Posts;
