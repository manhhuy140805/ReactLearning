import { mockBooks } from "../mock/books";
import { mockCategories } from "../mock/categoris";

export const fetchBooks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const booksWithCategory = mockBooks.map((book) => ({
        ...book,
        categoryName: mockCategories.map((cat) => cat.id === book.categoryId)
          ?.name,
      }));
      resolve(booksWithCategory);
    }, 1000);
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
    }, 1000);
  });
};
