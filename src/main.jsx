import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Books from "./routes/books";
import Add_book from "./routes/add_book";
import Find_book from "./routes/find_books";
import Book from "./routes/book";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/books" element={<Books />}>
          <Route path="bookId" element={<Book />} />
        </Route>
        <Route path="/add_book" element={<Add_book />} />
        <Route path="/find_book" element={<Find_book />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter >,
  rootElement
);