import { NavLink } from "react-router-dom";
import bookFacade from "../bookfacade";

export default () => {
    return (

        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {bookFacade.getBooks().map((book) => (
                    <NavLink
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/books/${book.id}`}
                        key={book.id}
                    >
                        {book.title}
                    </NavLink>
                ))}
            </nav>
        </div >
    );
}