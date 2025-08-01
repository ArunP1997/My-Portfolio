import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkStyle = (path) =>
    `hover:underline transition-colors ${
      location.pathname === path ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md py-4" style={{ backgroundColor: '#E5E4E2' }}>
      <div className="navbar-custom">
        {/* Left - Name & Role */}
        <div className="text-lg font-bold leading-tight text-white">
          <div className="name-title">Arun Prasad Muralidharan</div>
          <div className="role">AI Engineer | Researcher | Developer</div>
        </div>

        {/* Right - Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className={linkStyle("/")}>Info</Link>
          <Link to="/projects" className={linkStyle("/projects")}>Projects</Link>
          <Link to="/contact" className={linkStyle("/contact")}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;