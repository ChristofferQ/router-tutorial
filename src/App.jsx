import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Book viewing</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/books">Books</Link> |{" "}
        <Link to="/add_books">Add Books</Link> |{" "}
        <Link to="/find_books">Find Books</Link> |
      </nav>
      <Outlet />
    </div>
  );
}