import { mockBooks } from "../mock/books";
import { mockCategories } from "../mock/categoris";

export const fetchBooks = () => {
  new Promise((resolve) => {
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

// export const fetchBooks = () => {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       const booksWithCategory = mockBooks.map((book) => ({
//         ...book,
//         categoryName: mockCategories.find((cat) => cat.id === book.categoryId),
//       }));
//       resolve(booksWithCategory);
//     }, 1000);
//   });
// };
