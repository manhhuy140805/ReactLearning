import { mockBooks } from "../mock/books";
import { mockCategories } from "../mock/categoris";

export const fetchBooks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const booksWithCategory = mockBooks.map((book) => ({
        ...book,
        categoryName: mockCategories.find((cat) => cat.id === book.categoryId)
          ?.name,
      }));
      resolve(booksWithCategory);
    }, 200);
  });
};

export const fetchBookByID = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const book = mockBooks.find((book) => book.id === id);
      if (book) {
        const bookWithCategory = {
          ...book,
          categoryName:
            mockCategories.find((cat) => cat.id === book.categoryId)?.name ||
            "Không xác định",
        };
        resolve(bookWithCategory);
      } else {
        resolve(null);
      }
    }, 200);
  });
};

export const searchAndFilterBooks = (query, categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filteredBooks = mockBooks;
      if (query) {
        filteredBooks = filteredBooks.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase()),
        );
      }
      if (categoryId) {
        filteredBooks = filteredBooks.filter(
          (book) => book.categoryId === categoryId,
        );
      }
      resolve(filteredBooks);
    }, 200);
  });
};
