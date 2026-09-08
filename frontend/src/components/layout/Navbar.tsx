import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link to="/" className="font-semibold text-lg">
        Project Name
      </Link>
      <div className="flex gap-4 text-sm">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
