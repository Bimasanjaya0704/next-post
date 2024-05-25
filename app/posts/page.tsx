import CardList from "../components/posts/CardList";
import ViewUserBtn from "../components/posts/ViewUserBtn";

const Posts = async () => {
  const base_url = "https://jsonplaceholder.typicode.com/posts";

  interface Iposts {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const response = await fetch(base_url);
  const posts: Iposts[] = await response.json();
  return (
    <div>
      <h1>Post Page</h1>
      {posts.map((post) => {
        return (
            <CardList key={post.id}>
              <h1>{post.id}</h1>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
              <ViewUserBtn userId={post.userId}/>
            </CardList>
        );
      })}
    </div>
  );
};

export default Posts;
