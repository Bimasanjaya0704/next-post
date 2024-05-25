import Link from "next/link";


export default function Home() {
  return (
  <div>
    <h1>Home page</h1>
    <br />
    <Link href="/posts">
      Post Page
    </Link>
    <br />
    <Link href="/albums">
      Albums Page
    </Link>
  </div>
  );
}
