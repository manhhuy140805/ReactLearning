import { mockCategories } from "../mock/categoris";

export default function SearchBar({
  query,
  setQuery,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm kiếm sách..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(Number(e.target.value))}
      >
        <option value="">Tất cả thể loại</option>
        {mockCategories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}
