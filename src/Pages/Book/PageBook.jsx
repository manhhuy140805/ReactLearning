/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { searchAndFilterBooks } from "../../services/bookService";
import BookItem from "../../components/BookItem/BookItem";
import SearchBar from "../../components/SearchBar";

export default function PageBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setLoading(true);
    searchAndFilterBooks(query, selectedCategory).then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, [query, selectedCategory]);

  return (
    <>
      <h2>Danh sách sách</h2>
      <SearchBar
        query={query}
        setQuery={setQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
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
