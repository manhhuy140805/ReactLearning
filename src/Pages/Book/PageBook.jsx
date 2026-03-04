/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { fetchBooks } from "../../services/bookService";
import BookItem from "../../components/BookItem/BookItem";

export default function PageBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("render");
    setLoading(true);
    fetchBooks()
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi tải sách:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2>Danh sách sách</h2>
      {loading ? (
        <p>Đang tải sách...</p>
      ) : (
        books.map((book) => {
          return <BookItem key={book.id} book={book} />;
        })
      )}
    </>
  );
}
