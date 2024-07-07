import { useParams, Link, useNavigate } from "react-router-dom";

const PostPage = ({ posts, handleDelete, loading }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Import and use navigate
  const post = posts.find(post => (post.id).toString() === id);

  return (
    <main className="PostPage">
      <article className="post">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <button disabled={loading} onClick={() => handleDelete(post.id)}>
              {loading ? "In progress..." : "Delete Post"}
            </button>
            <button
              disabled={loading}
              style={{ backgroundColor: "white", marginLeft: "50px", color: "black" }}
              onClick={() => navigate(-1)}
            >
              {loading ? "In progress..." : "Cancel"}
            </button>
          </>
        ) : (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to='/'>Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;


