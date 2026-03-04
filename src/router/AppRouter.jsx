import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageBooks from "../Pages/Book/PageBook";
import PageBookDetail from "../Pages/BookDetail/PageBookDetail";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"></Route>
          <Route path="/book" element={<PageBooks />}></Route>
          <Route path="/book/:id" element={<PageBookDetail />}></Route>
          <Route path="/category"></Route>
          <Route path="/profile"></Route>
        </Routes>
      </Router>
    </>
  );
}
