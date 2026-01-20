import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      
      <div className="post">
        <img src="https://via.placeholder.com/500x300" alt="Blog Post" />
        <h2>Blog Post Title</h2>
        <p>This is a summary of the blog post. It provides a brief overview of the content to entice readers to click and read more.</p>
        <a href="">Read More</a>
      </div>

      <div className="post">
        <img src="https://via.placeholder.com/500x300" alt="Blog Post" />
        <h2>Blog Post Title</h2>
        <p>This is a summary of the blog post. It provides a brief overview of the content to entice readers to click and read more.</p>
        <a href="">Read More</a>
      </div>

      <div className="post">
        <img src="https://via.placeholder.com/500x300" alt="Blog Post" />
        <h2>Blog Post Title</h2>
        <p>This is a summary of the blog post. It provides a brief overview of the content to entice readers to click and read more.</p>
        <a href="">Read More</a>
      </div>
    </main>
  );
}

export default App;
