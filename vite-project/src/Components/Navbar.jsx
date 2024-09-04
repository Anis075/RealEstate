import "./navbar.scss";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="left-navbar">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Real State Logo" />
            <span>RealState</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right-navbar">
          <a href="/">Sign in</a>
          <a href="/" className="register">
            Sign up
          </a>
          <div className="menuIcon">
            <img src="/menu.png" alt="Hamberger" />
          </div>
          <div className="menu">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
          </div>
        </div>
      </nav>
    </>
  );
}
