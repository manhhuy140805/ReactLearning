import { useNavigate } from "react-router-dom";
import "./BookItem.css";

export default function BookItem({ book }) {
  const navigate = useNavigate();

  const {
    id,
    title,
    author,
    description,
    categoryName,
    imageUrl,
    publishedYear,
    pageCount,
    averageRating,
    totalRatings,
  } = book;

  return (
    <div className="book-item">
      <div className="book-image">
        <img src={imageUrl} alt={title} />
        <span className="book-rating">⭐ {averageRating}</span>
      </div>

      <div className="book-content">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">
          Tác giả: <strong>{author}</strong>
        </p>
        <p className="book-category">
          Danh mục: <span>{categoryName}</span>
        </p>
        <p className="book-description">{description}</p>

        <div className="book-info">
          <span className="book-year">📅 {publishedYear}</span>
          <span className="book-pages">📖 {pageCount} trang</span>
          <span className="book-reviews">💬 {totalRatings} đánh giá</span>
        </div>

        <div className="book-actions">
          <button
            className="btn-detail"
            onClick={() => navigate(`/book/${id}`)}
          >
            Chi tiết
          </button>
          <button className="btn-add-cart">Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  );
}
