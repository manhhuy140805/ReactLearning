/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBookByID } from "../../services/bookService";
import "./PageBookDetail.css";

export default function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchBookByID(parseInt(id))
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("lỗi: ", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Đang tải...</p>;
  if (!book) return <p>Không tìm thấy sách</p>;

  return (
    <div className="book-detail-container">
      <button className="btn-back" onClick={() => navigate(-1)}>
        ← Quay lại
      </button>

      <div className="book-detail">
        <div className="detail-image">
          <img src={book.imageUrl} alt={book.title} />
        </div>

        <div className="detail-info">
          <h1>{book.title}</h1>
          <p className="detail-author">
            Tác giả: <strong>{book.author}</strong>
          </p>
          <p className="detail-category">
            Danh mục: <span>{book.categoryName}</span>
          </p>
          <p className="detail-rating">
            ⭐ {book.averageRating}/5 ({book.totalRatings} đánh giá)
          </p>

          <div className="detail-specs">
            <div className="spec">
              <span>📅 Năm xuất bản:</span>
              <strong>{book.publishedYear}</strong>
            </div>
            <div className="spec">
              <span>📖 Số trang:</span>
              <strong>{book.pageCount} trang</strong>
            </div>
          </div>

          <p className="detail-description">{book.description}</p>

          <div className="detail-actions">
            <button className="btn-primary">Thêm vào giỏ hàng</button>
            <button className="btn-secondary">Yêu thích</button>
          </div>
        </div>
      </div>
    </div>
  );
}
