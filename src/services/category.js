import { mockCategories } from "../mock/categoris";

export const fetchCategories = () => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockCategories);
    }, 500);
  });
};
