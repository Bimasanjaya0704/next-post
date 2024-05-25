import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold mb-5">Project Next Sederhana</h1>
      <div className="flex justify-center space-x-4">
        <Link href="/posts">
          <h1 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Posts Page
          </h1>
        </Link>
        <Link href="/comments">
          <h1 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Comments Page
          </h1>
        </Link>
      </div>
    </div>
  );
}
