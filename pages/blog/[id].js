// pages/users/[id].js

function UserPosts({ posts }) {
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User {posts[0]?.userId}`s Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const posts = await response.json();
  // console.log(posts,'id')

  return {
    props: {
      posts,
    },
  };
}

export default UserPosts;
