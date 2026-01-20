export default function Post() {
  return (
      <div className="post">
        <div className="image">
          <img src="https://via.placeholder.com/500x300" alt="Blog Post" />
        </div>
        <div className="text">
          <h2>Blog Post Title</h2>
          <p className="info">
            <a className="author" href="">
              Sipho Sisusa
            </a>
            <time>2025-01-20 11:46</time>
          </p>
          <p className="summary">
            This is a summary of the blog post. It provides a brief overview of the content to entice readers to click and read more
          </p>
        </div>
        <a href="">Read More</a>
      </div>
  );
}
