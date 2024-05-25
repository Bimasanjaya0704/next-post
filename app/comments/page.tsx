
import { FiArrowLeft } from "react-icons/fi";
import CardList from "../components/posts/CardList";
import Link from "next/link";
import ViewUserBtnAlbums from "../components/albums/ViewUserBtnAlbums";

const Albums = async () => {
  const base_url = "https://jsonplaceholder.typicode.com/comments";

  interface Ialbums {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }

  const response = await fetch(base_url, {
    cache: "no-store"
  });
  const albums: Ialbums[] = await response.json();


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
       
        <h1 className="text-3xl font-bold">Comments Page</h1>
      </div>
      {albums.map((album) => {
        return (
          <CardList key={album.id}>
            <p className="text-gray-700 text-lg font-bold">Post Id : {album.postId}</p>
            <p className="text-gray-700">{album.email}</p>
            <p className="text-gray-700">{album.body}</p>
            <ViewUserBtnAlbums name={album.name} />
          </CardList>
        );
      })}
    </div>
  );
};

export default Albums;
